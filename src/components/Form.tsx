// import Step1 from './Step1';
import Step2 from "./Step2";

const Form = () => {
  return (
    <section className="w-full h-full flex flex-col bg-magnolia relative">
      <div className="h-full p-4">
        {/* this should probably the form element */}
        <div className="h-fit max-h-full relative top-[-5.55rem] w-full bg-white shadow-md rounded-xl px-6 py-7">
          <Step2 />
        </div>
      </div>

      <div className="flex justify-between w-full bg-white p-3.5">
        <button
          type="button"
          className="capitalize text-sm font-bold text-gray-cool"
        >
          Go back
        </button>
        <button
          type="button"
          className="capitalize rounded bg-blue-marine text-white px-4 py-2 text-sm"
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default Form;
