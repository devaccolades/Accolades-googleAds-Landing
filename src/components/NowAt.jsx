"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const NowAt = () => {
  const [selected, setSelected] = useState("Kochi");
  const location = [
    {
      place: "Kochi",
      address:
        "Accolades Integrated Pvt Ltd | No.32/3071 – B | First Floor Anjiparambil Building | Ponnurunni | NH Bypass | Vyttila | Kochi – 682 019",
      mobile: "+91 90486 89977",
      email: "mail@accoladesmedia.co.in",
    },
    {
      place: "Trivandrum",
      address:
        "Accolades Integrated Pvt Ltd 3B, Unity Towers | Chempakassery Nagar Ln | Chempakassery Nagar | opp. M. G.College | Kesavadasapuram | Thiruvananthapuram | Kerala – 695004",
      mobile: "+91 90480 33288",
      email: "tvm@accoladesmedia.co.in",
    },
    {
      place: "Mumbai",
      address:
        "Accolades Integrated Pvt Ltd – 301 | 3rd floor | Corporate Corner | Sundar Nagar | Malad West | Mumbai – 400064",
      mobile: "+91 90480 33288",
      email: "mumbai@accoladesmedia.co.in",
    },
    {
      place: "Calicut",
      address:
        "Accolades Integrated Pvt Ltd Akkai Tower | 59/3785, 2nd Floor | Tali Cross Road | Calicut – 673002",
      mobile: "",
      email: "",
    },
    {
      place: "Bengaluru",
      address:
        "Accolades Integrated Pvt Ltd | 5th Floor| ITPL Main Road | Garudachan Palaya | Mahadevapura | Bengaluru – 560 048",
      mobile: "",
      email: "",
    },
  ];
  return (
    <section className="container mx-auto px-6">
      <h2 className="text-[24px] md:text-[36px] lg:text-[48px] font-bold text-center text-gray-800 mb-5">
        We are <span className="text-teal-600">Now At</span>
      </h2>

      <div className="flex flex-col md:flex-row">
        <div className="w-[70%] flex flex-col gap-[20px]">
          <div className="flex flex-wrap gap-4">
            {location.map((item) => (
              <button
              key={item.place}
                onClick={() => setSelected(item.place)}
                className={`bg-[#e0f2f1] text-[#009689] px-[20px] py-[10px] rounded-xl ${selected === item.place ? " text-white bg-[#326c67]":""}`}
              >
                {item.place}
              </button>
            ))}
          </div>
          <div className="flex flex-col">
            <div>
                <IoLocationOutline />
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-[30%] rounded-2xl">
          <iframe
            name="myiFrame"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.1253727708323!2d76.3162912695514!3d9.988720320158786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMTkuNCJOIDc2wrAxOScwMS4wIkU!5e1!3m2!1sen!2sin!4v1755942872136!5m2!1sen!2sin"
            style={{ borderRadius: "10px", width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default NowAt;

{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.1253727708323!2d76.3162912695514!3d9.988720320158786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMTkuNCJOIDc2wrAxOScwMS4wIkU!5e1!3m2!1sen!2sin!4v1755942872136!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
