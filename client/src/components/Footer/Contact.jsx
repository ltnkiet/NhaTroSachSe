import React from "react";
import { contact } from "utils/constant";
import { Button } from "components";

const Contact = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 mt-5 w-[70%] flex flex-col justify-center items-center
      gap-6 border-4 border-dashed border-secondary">
      <img
        src={contact.image}
        alt="thumbnal"
        className="w-full h-48 object-contain"
      />
      <p>{contact.content}</p>
      <div className="flex items-center justify-around w-full">
        {contact.contacts.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center">
              <span className="text-orange-500 font-semibold">
                {item.text}
              </span>
              <span className="text-blue-900 text-lg font-semibold">
                {item.phone}
              </span>
              <span className="text-blue-900 text-lg font-semibold">
                {item.zalo}
              </span>
            </div>
          );
        })}
      </div>
      <Button
        text="Gửi liên hệ"
        bgColor="bg-secondary"
        textColor="text-white"
        px="px-6"
      />
      <div className="h-12"></div>
    </div>
    
  );
};

export default Contact;
