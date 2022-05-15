import PrivacyPolicy from './PrivacyPolicy'
import 'styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <span>© 2022 Tec<sup>3</sup>, LLC.</span>
      <span>All Rights Reserved.</span>

      <PrivacyPolicy />
    </footer>
  );
};
