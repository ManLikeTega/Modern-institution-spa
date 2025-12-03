import { Link } from "react-router";

function CourseIntroduction({ data }) {
  return (
    <>
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold">{data.title}</h1>

            <p className="my-6">{data.description}</p>

            <Link to="/contact">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Apply Now!
              </button>
            </Link>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img src={data.image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseIntroduction;
