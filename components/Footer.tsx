export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          The Edit <span>Derr</span>
        </div>
        <p>&copy; {new Date().getFullYear()} The Edit Derr. All rights reserved.</p>
        <p>
          <a href="mailto:amber@theeditderr.com">amber@theeditderr.com</a>
        </p>
      </div>
    </footer>
  );
}
