export default function Step2() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="font-bold text-2xl text-blue-marine">Select your plan</h3>
      <p className="text-gray-cool">
        You have the option of monthly or yearly billing.
      </p>
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-col gap-0">
          <div>
            <label className="text-[13px] text-blue-marine">Name</label>
            <p className={`hidden`}></p>
          </div>
          <input
            type="text"
            className="rounded border-gray-light border-[1px] px-4 py-2 w-full font-bold text-[15px]"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div>
            <label className="text-[13px] text-blue-marine">
              Email Address
            </label>
            <p className={`hidden`}></p>
          </div>
          <input
            type="text"
            className="rounded border-gray-light border-[1px] px-4 py-2 w-full font-bold text-[15px]"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div>
            <label className="text-[13px] text-blue-marine">Phone Number</label>
            <p className={`hidden`}></p>
          </div>
          <input
            type="text"
            className="rounded border-gray-light border-[1px] px-4 py-2 w-full font-bold text-[15px]"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>

      <div>
        <label>
          <input type="checkbox" className="hidden" />
          <div className="w-10 h-5 rounded-full relative flex p-1 bg-blue-marine before:w-3 before:h-3 before:bg-white before:rounded-full items-center"></div>
        </label>
      </div>
    </div>
  );
}
