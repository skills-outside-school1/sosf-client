import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import MaskButton from "../Atoms/Button-Atoms/Mask-Button";
import Link from "next/link";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    picture: null,
    stateOfOrigin: "",
    role: "",
    subrole: "",
    dateOfBirth: null,
    gender: "",
    address: {
      street: "",
      country: "",
      city: "",
      state: "",
      postalCode: "",
    },
  });

  const [mainOption, setMainOption] = useState(""); // State for selected main option
  const [subOptions, setSubOptions] = useState([]); // State for sub-options

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture") {
      setFormData((prev) => ({ ...prev, picture: files[0] }));
    } else if (name.includes("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, dateOfBirth: date }));
  };

  const handleMainOptionChange = (e) => {
    const selectedOption = e.target.value;
    setMainOption(selectedOption);

    // Find the selected main option in the dropdown_1 array and set its sub-options
    const foundOption = dropdown_1.find(
      (option) => option.value === selectedOption
    );
    setSubOptions(foundOption ? foundOption.submenu : []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      const response = await axios.post(
        "http://localhost:3001/register",
        formDataToSend
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row flex-wrap gap-x-5 gap-y-5 px-2 justify-start items-start h-[fixed] my-[2rem]"
    >
      {/* Other form inputs */}
      <input
        type="text"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />

      <input
        type="text"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="tel"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        type="email"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      {/* Password field with toggle visibility */}
      <div className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  border border-gray-800 rounded-lg bg-white flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="flex-1 outline-none"
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          className="cursor-pointer text-black "
        />
      </div>

      {/* Confirm Password field with toggle visibility */}
      <div className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  border border-gray-800 rounded-lg bg-white flex items-center">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="flex-1 outline-none"
        />
        <FontAwesomeIcon
          icon={showConfirmPassword ? faEyeSlash : faEye}
          onClick={toggleConfirmPasswordVisibility}
          className="cursor-pointer text-black "
        />
      </div>

      {/* Custom File Input */}
      <div className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  border bg-white  border-gray-800 rounded-lg relative">
        <input
          type="file"
          name="picture"
          accept="image/*"
          className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          onChange={handleChange}
        />
        <div className="flex justify-between items-center w-full h-full bg-gray-100 text-blue cursor-pointer">
          {formData.picture ? formData.picture.name : "upload photo..."}
          <button
            type="button"
            className="bg-blue-500 text-blue  px-4 py-2 rounded-lg"
          >
            Upload
          </button>
        </div>
      </div>

      <input
        type="text"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="stateOfOrigin"
        value={formData.stateOfOrigin}
        onChange={handleChange}
        placeholder="state of origin"
      />
      <select
        type="dropdown"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg  "
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="" disabled>
          Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="text"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="country"
        value={formData.address.country}
        onChange={handleChange}
        placeholder="country"
      />
      <input
        type="text"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="city"
        value={formData.address.city}
        onChange={handleChange}
        placeholder="city"
      />
      <input
        type="text"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="street"
        value={formData.address.street}
        onChange={handleChange}
        placeholder="street"
      />

      <input
        type="text"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg"
        name="postalCode"
        value={formData.address.postalCode}
        onChange={handleChange}
        placeholder="postalCode"
      />

      <DatePicker
        selected={formData.dateOfBirth}
        onChange={handleDateChange}
        className=" w-[330px]  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border   border-gray-800 rounded-lg"
        dateFormat="dd/MM/yyyy"
        placeholderText="Date of Birth"
        maxDate={new Date()} // No future dates
        showYearDropdown
        showMonthDropdown
        yearDropdownItemNumber={100} // Customize the number of years shown
        scrollableYearDropdown
      />

      {/* First Dropdown for main options */}
      <select
        type="dropdown"
        className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg "
        name="role"
        value={mainOption}
        onChange={handleMainOptionChange} // This changes the sub-options
      >
        <option value="" disabled>
          What best describes you?
        </option>
        {dropdown_1.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Second Dropdown for sub-options */}
      {mainOption && (
        <select
          type="dropdown"
          className=" w-full  md:w-[300px] h-[60px] px-3 text-black font-inter font-semibold  outline-none focus:ring-2 focus:ring-blue border border-gray-800 rounded-lg "
          name="subrole"
          value={formData.subrole}
          onChange={handleChange} // Handle the final sub-option change
        >
          <option value="" disabled>
            Select a sub-category
          </option>
          {subOptions.map((subOption) => (
            <option key={subOption.value} value={subOption.value}>
              {subOption.label}
            </option>
          ))}
        </select>
      )}
      <MaskButton
        className1={`bg-secondary_blue`}
        className2={`bg-secondary_blue`}
        buttontext={`Register`}
      />
      <div className="flex flex-col justify-start items-start my-[1rem] ml-auto  mr-[3rem]">
        <p className="text-gray-800 text-base  font-inter font-normal ">
          Already have an account?
          <Link href="http://197.210.166.58:4005/#/login">
            {" "}
            <span className="text-blue font-bold "> Sign In </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

const dropdown_1 = [
  {
    label: "Student",
    value: "Student",
    submenu: [
      { label: "High School", value: "High School" },
      { label: "Undergraduate", value: "Undergraduate" },
      { label: "Postgraduate", value: "Postgraduate" },
    ],
  },
  {
    label: "Teacher",
    value: "Teacher",
    submenu: [
      { label: "Elementary School", value: "Elementary School" },
      { label: "Middle School", value: "Middle School" },
      { label: "High School", value: "High School" },
    ],
  },
  {
    label: "Investor",
    value: "Investor",
    submenu: [
      { label: "Individual", value: "Individual" },
      { label: "Corporation", value: "Corporation" },
      { label: "Foundation", value: "Foundation" },
    ],
  },
];

export default RegisterForm;
