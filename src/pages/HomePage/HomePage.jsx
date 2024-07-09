import DocumentTitle from "../../components/DocumentTitle";
import AppLayout from "../../components/AppLayout/AppLayout";
import iconsPath from "../../assets/img/icons.svg";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home Page</DocumentTitle>
      <AppLayout>
        <section className={css.container}>
          <div className={css.titleContainer}>
            <h1 className={css.title}>
              Discover Your Next Adventure with{" "}
              <span className={css.accent}>Campers-Ukraine</span>
            </h1>
            <p className={css.text}>Experience the Freedom of the Open Road</p>
            <div className={css.wrapper}>
              <Link to="/catalog" className={css.carContainer}>
                <svg className={css.carIconContainer} aria-label="car icon">
                  <use
                    width="100"
                    height="80"
                    href={`${iconsPath}#icon-button3`}
                    className={css.carIcon}
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <footer className={css.footer}>
          <ul className={css.hashtags}>
            <li className={css.hashtag}>#Luxury on Wheels</li>
            <li className={css.hashtag}>#Reliable and Safe</li>
            <li className={css.hashtag}>#Explore More</li>
            <li className={css.hashtag}>#Exceptional Customer Service</li>
            <li className={css.hashtag}>#Support 24/7</li>
          </ul>
          <address className={css.address}>
            <p className={css.phone}>
              Call us:{" "}
              <a href="tel:+11234567890" className={css.phoneNumber}>
                +1 123 456 7890
              </a>
            </p>
          </address>
        </footer>
      </AppLayout>
    </>
  );
}
