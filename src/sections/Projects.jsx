import { motion } from "framer-motion";
import Project from "../components/Project";
import LineGradient from "../components/LineGradient";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        className="mt-16 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="mb-4 font-playfair font-semibold text-4xl">
          MY&nbsp;<span className="text-red">PROJECTS</span>
        </p>
        <div className="mt-4 mb-8 flex justify-center ">
          <LineGradient width="w-60" />
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* ROW 1 */}
          <div className="max-w-[325px] max-h-[325px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[400px] md:max-h-[400px] p-10 flex justify-center items-center bg-red text-center text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            href="https://justcarservice.com.au"
            title="Just Car Service"
            desc="Car Service Management"
          />
          <Project
            href="https://www.yabberchat.online"
            title="Yabber Chat"
            desc="Online Chat Application"
          />

          {/* ROW 2 */}
          <Project
            href="https://nextjs-mobile-shop.vercel.app"
            title="Shoppier"
            desc="Mobile Shopping Website"
          />
          <Project
            href="https://nextjs-fooddie-ordering.vercel.app"
            title="Pizza Restaurant"
            desc="Food Ordering Website"
          />
          <Project
            href="https://expense-tracker-management.herokuapp.com"
            title="Cost Saver"
            desc="Expense Tracker Management"
          />
          {/* ROW 3 */}
          <Project
            href="https://openweather-tailwind.netlify.app"
            title="OpenWeather API"
            desc="Weather Forecast Application"
          />
          <Project
            href="https://lance-lin.netlify.app"
            title="Lance Lin"
            desc="Personal Website"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
            max-w-[325px] max-h-[325px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[400px] md:max-h-[400px] text-2xl font-playfair font-semibold"
          >
            FRIENDLY USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
