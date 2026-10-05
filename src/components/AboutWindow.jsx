import Window from "./Window";

function AboutWindow({ onClose, onMinimize }) {
  return (
    <Window
      title="About Abdul Salam"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>

        <p className="text-sm font-medium tracking-wider text-cyan-400">
          ABOUT
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Building, Learning, Improving
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 text-slate-400">

          <p>
            I'm Abdul Salam, a Computer Science graduate focused on
            building modern web applications and improving my
            full-stack development skills.
          </p>

          <p>
            My current development stack includes React, JavaScript,
            Tailwind CSS, PHP, Laravel, MySQL and REST APIs.
          </p>

          <p>
            I enjoy turning ideas into practical digital products
            while continuously learning better development practices.
          </p>

        </div>

      </div>
    </Window>
  );
}

export default AboutWindow;