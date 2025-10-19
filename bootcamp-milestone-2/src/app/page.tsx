import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className="page-title">Hi, I'm Logan Schmid</h1>
      <div className={styles["about"]}>
        <div className={styles["about-text"]}>
          <p>
            I am a <strong>BMED grad student</strong> at <em>Cal Poly</em>.
          </p>
          <p>
            I am currently working on my Master's thesis, involving the use of{" "}
            <em>pressure sensors</em> and <em>deep learning</em> models in an{" "}
            <em>embedded system</em> to analyze the fit of a{" "}
            <em>lower-limb prosthetic</em> on an amputee's residual limb.
          </p>
        </div>
        <div className={styles["about-image"]}>
          <img
            src="/LLEAP Headshot 2023.png"
            alt="Picture of me!"
            width="250"
          />
        </div>
      </div>
    </main>
  );
}
