export default function Step2() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="font-bold text-2xl text-blue-marine">Finishing up</h3>
      <p className="text-gray-cool">
        Double-check everything looks OK before confirming.
      </p>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full p-4 rounded-md flex flex-col gap-2.5 bg-alabaster">
          <div className="flex justify-between">
            <div className="w-full flex flex-col justify-between items-start ">
              <p className="text-blue-marine font-bold text-sm">
                Arcade (Monthly)
              </p>
              <button
                type="button"
                className="text-gray-cool text-sm underline"
              >
                Change
              </button>
            </div>
            <p className="text-blue-marine text-sm font-bold">$9/mo</p>
          </div>

          {
            <>
              <div className="w-full h-[1px] bg-gray-light flex"></div>
              <div className="w-full flex justify-between items-center ">
                <p className="text-gray-cool text-sm">Online service</p>
                <p className="text-blue-marine text-sm">$1/mo</p>
              </div>
              <div className="w-full flex justify-between items-center ">
                <p className="text-gray-cool text-sm">Larger storage</p>
                <p className="text-blue-marine text-sm">$2/mo</p>
              </div>
            </>
          }
        </div>
        <div className="w-full px-4 flex justify-between items-center ">
          <p className="text-gray-cool text-sm">Total (per month)</p>
          <p className="text-blue-purplish text-base font-bold">$12/mo</p>
        </div>
      </div>
    </div>
  );
}
