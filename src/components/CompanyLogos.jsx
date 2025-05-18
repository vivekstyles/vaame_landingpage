import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} block`}>
      <h5 className="tagline mb-6 text-center text-n-1/50 px-4 sm:px-0 text-sm sm:text-base">
        Vaame is built for everyone, from data newcomers to experts. Our AI-driven platform means you simply type what you need, and Vaame handles the SQL and visualization. The result? Clear, interactive charts at your fingertips — no coding required.
      </h5>
      <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 px-4">
        {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex items-center justify-center h-[3rem] md:h-[4rem] lg:h-[8.5rem] w-[100px] md:w-[134px]"
          >
            <img
              src={logo}
              className="w-[80px] md:w-[100px] lg:max-w-[134px] h-auto object-contain"
              alt={`Logo-${i}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
