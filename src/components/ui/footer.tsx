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
              <li><span className="text-gray-400">Email: info@rosglobal.com</span></li>
              <li><span className="text-gray-400">Phone: +971 55 526 2149</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ROS Global Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;