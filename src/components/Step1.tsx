export default function Step1() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="font-bold text-2xl text-blue-marine">Personal Info</h3>
      <p className="text-gray-cool">
        Please provide your name, email, address, and phone number.
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
    </div>
  );
}
