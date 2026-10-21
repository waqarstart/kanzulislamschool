import React, { useState } from "react";
import BoysSummerUniform from "../assets/boys-summer-uniform.jpeg";
import BoysWinterUniform from "../assets/boys-winter-uniform.jpeg";
import PageHeader from "../components/PageHeader";
const Uniform = () => {
  const [toggleBoysUniform, setToggleBoysUniform] = useState(true);
  const handleBoysUniformToggle = (a) => setToggleBoysUniform(a);
  const [toggleGirlsUniform, setToggleGirlsUniform] = useState(true);
  const handleGirlsUniformToggle = (a) => setToggleGirlsUniform(a);
  return (
    <>
      <PageHeader
        title="Our School Uniform"
        text="Our uniform reflects the values and identity of Kanz-ul-Islam Beacon Model School. Explore the summer and winter options for boys and girls below."
      />
      <div className="mx-auto flex max-w-7xl flex-row gap-6 px-5 py-5 md:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl text-navy">Boys Uniform</h1>
          <div className="flex flex-col gap-10 py-4 md:flex-row">
            <button
              onClick={() => handleBoysUniformToggle(true)}
              className="btn rounded bg-navy text-white border border-navy/60 px-6 py-3 font-semibold hover:bg-white hover:text-navy transition"
            >
              Summer Uniform
            </button>
            <button
              onClick={() => handleBoysUniformToggle(false)}
              className="btn rounded border border-navy/60 px-6 py-3 font-semibold hover:bg-white hover:text-navy transition"
            >
              Winter Uniform
            </button>
          </div>
          <div>
            {toggleBoysUniform ? (
              <img src={BoysSummerUniform} />
            ) : (
              <img src={BoysWinterUniform} />
            )}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl text-navy">Girls Uniform</h1>
          <div className="flex flex-col gap-10 py-4 md:flex-row">
            <button
              onClick={() => handleGirlsUniformToggle(true)}
              className="btn rounded bg-navy text-white border border-navy/60 px-6 py-3 font-semibold hover:bg-white hover:text-navy transition"
            >
              Summer Uniform
            </button>
            <button
              onClick={() => handleGirlsUniformToggle(false)}
              className="btn rounded border border-navy/60 px-6 py-3 font-semibold hover:bg-white hover:text-navy transition"
            >
              Winter Uniform
            </button>
          </div>
          <div>
            {toggleGirlsUniform ? (
              <img src={BoysSummerUniform} />
            ) : (
              <img src={BoysWinterUniform} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Uniform;
