import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
      const location = useLocation();
      const pathnames = location.pathname.split('/').filter((x) => x);

      const pathDisplayNames = {
            'vehicle-listing': 'Vehicle Listing',
            'service': 'Services',
            'pricelist': 'Price List',
            'booking': 'Booking',
            'blogs': 'Blogs',
            'contact': 'Contact Us',
            'post-booking': 'Post Booking',
            // Add other mappings as needed
      };

      return (
            <nav>
                  <ul className="breadcrumb">
                        <li>
                              <Link to="/">Home</Link>
                        </li>
                        {pathnames.map((value, index) => {
                              let to = `/${pathnames.slice(0, index + 1).join('/')}`;

                              const displayName = pathDisplayNames[value] || decodeURIComponent(value);

                              return (
                                    <li key={to}>
                                          <Link to={to}>{displayName}</Link>
                                    </li>
                              );
                        })}
                  </ul>
            </nav>
      );
};

export default Breadcrumbs;