# =========================
# AWS Provider (Stockholm)
# =========================
provider "aws" {
  region = "eu-north-1"
}

# =========================
# Latest Ubuntu 24.04 AMI
# =========================
data "aws_ami" "ubuntu_24" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }
}

# =========================
# SSH Key Pair (LOCAL FILE)
# =========================
resource "aws_key_pair" "deployer" {
  key_name   = "terraform-key-v2"
  public_key = file("./terraform-key.pub")
}

# =========================
# Security Group (DEVOPS LAB)
# =========================
resource "aws_security_group" "devops_sg" {
  name        = "devops-lab-suzuki-sg"
  description = "Security group for Jenkins, Docker, Kubernetes, Grafana"

  # SSH
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Jenkins
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # React App / Nginx
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Kubernetes NodePort
  ingress {
    from_port   = 30080
    to_port     = 30080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Grafana
  ingress {
    from_port   = 3001
    to_port     = 3001
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Kubernetes API (k3s)
  ingress {
    from_port   = 6443
    to_port     = 6443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Outbound ALL TRAFFIC
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# =========================
# EC2 INSTANCE
# =========================
resource "aws_instance" "devops_lab_suzuki" {
  ami                    = data.aws_ami.ubuntu_24.id
  instance_type          = "t3.small"
  key_name               = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.devops_sg.id]

  tags = {
    Name = "DevOps-Lab-Final-Suzuki"
  }
}

# =========================
# OUTPUT PUBLIC IP
# =========================
output "instance_public_ip" {
  value = aws_instance.devops_lab_suzuki.public_ip
}
