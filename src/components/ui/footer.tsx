import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ROS Global Solutions</h3>
            <p className="text-gray-400 mb-4">
              Total engineering solutions provider.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product Lines</h4>
            <ul className="space-y-2">
              <li><Link to="/oil-gas" className="hover:text-white transition-colors">Oil & Gas</Link></li>
              <li><Link to="/hvac" className="hover:text-white transition-colors">HVAC</Link></li>
              <li><Link to="/datacenter" className="hover:text-white transition-colors">Data Center</Link></li>
              <li><Link to="/rhamnolipids" className="hover:text-white transition-colors">Rhamnolipids</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-white transition-colors">Get In Touch</Link></li>
              <li><a href="mailto:inquiry@rosglobal.com"><span className="text-gray-400">Email: inquiry@rosglobal.com</span></a></li>
              <li><a href="tel:+97167041447"><span className="text-gray-400">Tel: +971 6 704 1447</span></a></li>
              <li><a href="tel:+971547917288"><span className="text-gray-400">Mobile: +971 54 791 7288</span></a></li>
              <li><a href="tel:+971565477065"><span className="text-gray-400">Mobile: +971 56 547 7065</span></a></li>

            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ROS Global Solutions FZE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;