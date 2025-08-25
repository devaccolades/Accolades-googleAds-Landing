"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const NowAt = () => {
  const [selected, setSelected] = useState("Kochi");
  const location = [
    {
      place: "Kochi",
      address:
        "Accolades Integrated Pvt Ltd | No.32/3071 – B | First Floor Anjiparambil Building | Ponnurunni | NH Bypass | Vyttila | Kochi – 682 019",
      mobile: "+91 90486 89977",
      email: "mail@accoladesmedia.co.in",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.1253727708323!2d76.3162912695514!3d9.988720320158786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMTkuNCJOIDc2wrAxOScwMS4wIkU!5e1!3m2!1sen!2sin!4v1755942872136!5m2!1sen!2sin",
    },
    {
      place: "Trivandrum",
      address:
        "Accolades Integrated Pvt Ltd 3B, Unity Towers | Chempakassery Nagar Ln | Chempakassery Nagar | opp. M. G.College | Kesavadasapuram | Thiruvananthapuram | Kerala – 695004",
      mobile: "+91 90480 33288",
      email: "tvm@accoladesmedia.co.in",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.125120799135!2d76.93957990000001!3d8.5318252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b9e8fdcff475%3A0xb4441a3938936e66!2sACCOLADES%20Integrated%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1756101659278!5m2!1sen!2sin",
    },
    {
      place: "Mumbai",
      address:
        "Accolades Integrated Pvt Ltd – 301 | 3rd floor | Corporate Corner | Sundar Nagar | Malad West | Mumbai – 400064",
      mobile: "+91 90480 33288",
      email: "mumbai@accoladesmedia.co.in",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.839973978926!2d72.84070850000001!3d19.1702088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90c6b2f6b7d%3A0x9c8b5e4a5f5c4c6a!2sAccolades%20Integrated%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1756101785126!5m2!1sen!2sin",
    },
    {
      place: "Calicut",
      address:
        "Accolades Integrated Pvt Ltd Akkai Tower | 59/3785, 2nd Floor | Tali Cross Road | Calicut – 673002",
      mobile: "",
      email: "",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.260750551965!2d75.78761117314679!3d11.247591980312464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65932cf91c009%3A0xf48916f4d304f205!2sACCOLADES%20Integrated%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1756101480060!5m2!1sen!2sin",
    },
    {
      place: "Bengaluru",
      address:
        "Accolades Integrated Pvt Ltd | 5th Floor| ITPL Main Road | Garudachan Palaya | Mahadevapura | Bengaluru – 560 048",
      mobile: "",
      email: "",
      map: "",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
        We are <span className="text-teal-600">Now At</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
        <div className="w-full lg:w-7/12 flex flex-col justify-between gap-8">
          <div className="flex md:flex-wrap gap-3 md:gap-4 overflow-auto ">
            {location.map((item) => (
              <button
                key={item.place}
                onClick={() => setSelected(item.place)}
                className={`px-5 py-2 rounded-xl transition-colors duration-200 ${
                  selected === item.place
                    ? "text-white bg-[#009689]"
                    : "bg-[#e0f2f1] text-[#009689]"
                }`}
              >
                {item.place}
              </button>
            ))}
          </div>
          {location
            .filter((item) => item.place === selected)
            .map((details) => (
              <div
                key={details.place}
                className="flex flex-col justify-around px-6 py-5 shadow-md border border-[#e0f2f1] rounded-2xl gap-5 h-[80%]"
              >
                <div className="flex gap-4">
                  <div className="bg-[#e0f2f1] w-fit h-fit p-2.5 rounded-lg">
                    <IoLocationOutline className="text-[#009689] text-xl" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[#009689] font-semibold">
                      {details.place}
                    </p>
                    <p className="text-[#546e7a] max-w-xl">{details.address}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center p-3 bg-[#f4f9f9] rounded-lg w-full gap-2">
                    <div className="w-fit h-fit p-2.5 bg-[#e0f2f1] rounded-lg">
                      <CiPhone className="text-xl text-[#009689]" />
                    </div>
                    <p className="text-[#009689]">{details.mobile}</p>
                  </div>
                  <div className="flex items-center p-3 bg-[#f4f9f9] rounded-lg w-full gap-2 mt-2 sm:mt-0">
                    <div className="w-fit h-fit p-2.5 bg-[#e0f2f1] rounded-lg">
                      <CiMail className="text-xl text-[#009689]" />
                    </div>
                    <p className="text-[13px] md:text-[16px] text-[#009689]">
                      {details.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {location
          .filter((item) => item.place === selected)
          .map((loc) => (
            <div
              key={loc.place}
              className="w-full lg:w-5/12 rounded-2xl flex items-center"
            >
              <iframe
                name="myiFrame"
                src={loc.map}
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  minHeight: "300px",
                  height: "350px",
                  maxHeight: "450px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default NowAt;

{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.1253727708323!2d76.3162912695514!3d9.988720320158786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMTkuNCJOIDc2wrAxOScwMS4wIkU!5e1!3m2!1sen!2sin!4v1755942872136!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
