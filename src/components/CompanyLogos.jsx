import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Automate complex database queries and unlock your team's full potential with our revolutionary AI-driven SQL query generator. Say goodbye to tedious manual query writing and hello to efficient, accurate database interactions.
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={logo} width={134} height={28} alt={`Logo-${i}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
