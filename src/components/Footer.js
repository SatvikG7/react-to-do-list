import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <Link
          style={{
            textDecoration: "none",
            color: "aliceblue",
            fontWeight: "bold",
            fontSize: "20px",
            width: "100%",
          }}
          to="/about"
        >
          ••••••• About •••••••
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
