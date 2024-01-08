import BgDesktop from '../assets/images/bg-sidebar-desktop.svg';
import BgMobile from '../assets/images/bg-sidebar-mobile.svg';
import { formSteps } from '../data';
import { useGlobalDataContext } from '../contexts/GlobalDataProvider';

export default function Menu() {
  const { globalData } = useGlobalDataContext();
  const currentStep = globalData.currentStep;

  return (
    <section className="relative">
      <picture className="w-full max-w-full">
        <source
          srcSet={BgDesktop}
          media="(min-width:500px)"
          className="w-full"
        />
        <source
          srcSet={BgMobile}
          media="(max-width:500px)"
          className="w-full"
        />
        <img src={BgMobile} className="w-full" alt="" />
      </picture>
      <div className="absolute flex inset-0 justify-center items-start">
        <ul className="flex px-2 pb-2 pt-8 gap-4">
          {formSteps.map((step) => (
            <li key={step.id} className="flex gap-1 items-center">
              <div
                className={`rounded-full flex items-center justify-center p-4 text-lg border-[1px] w-4 h-4 ${
                  step.id === currentStep.id
                    ? 'bg-blue-light text-blue-marine border-blue-light'
                    : 'bg-transparent text-white border-white'
                }`}
              >
                <p className="text-base font-bold">{step.id}</p>
              </div>
              <div className='hidden lg:flex lg:flex-col'>
                <h5>Step {step.id}</h5>
                <p>{step.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
