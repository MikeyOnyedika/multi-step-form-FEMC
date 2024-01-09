import IconThankYou from '../assets/images/icon-thank-you.svg';

export default function Step5() {
  return (
    <section className="px-4 py-12 flex flex-col justify-center items-center gap-6">
      <img src={IconThankYou} className="w-14 h-14" />
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className="text-2xl text-blue-marine font-bold">Thank you!</h3>
        <p className="text-gray-cool text-center break-words">
          Thanks for confirming your subscription! <br />
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}
