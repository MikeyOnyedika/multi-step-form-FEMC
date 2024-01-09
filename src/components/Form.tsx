// import Step1 from './Step1';
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from './Step4';
import Step5 from './Step5';

const Form = () => {
  return (
    <section className="w-full h-full flex flex-col bg-magnolia relative">
      <div className="h-full p-4">
        {/* this should probably the form element */}
        <div className="h-fit max-h-full relative top-[-5.55rem] w-full bg-white shadow-md rounded-xl px-2 py-7">
          <Step5 />
        </div>
      </div>

      <div className="flex justify-between w-full bg-white p-3.5">
        <button
          type="button"
          className="capitalize text-sm font-medium text-gray-cool"
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
