import { InputProps } from 'src/components/UI/Input';
import { Options } from './components/UI/Select/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

declare global {
	interface LocaleDataType {
		header: {
			beforeContacts: string;
			text: string[];
			icons: IconDefinition[];
			links: string[];
			phoneNumber: string;
		};

		hero: {
			phoneNumber: string;
			textBlock: {
				heading: string;
				description: string;
				price: string;
				currency: string;
				untilDate: string;
				note: string;
			};
			formBlock: FormBlock;
		};

		info: {
			description: string[];
			link: LinkType;
			advantages: AdvantageObject[];
			images: string[];
		};

		sliderWithTabs: {
			heading: string;
			tabs: TabType[];
			descriptions: SliderDescriptionObject[];
			images: ImageType[];
			nextButtonText: string;
		};

		rateSlider: {
			rate: number;
			rateText: (rate: number) => string;
			link?: LinkType;
			images: ImageType;
		};

		priceBlock: {
			heading: string;
			prices: PriceItem[];
			clarifying: string;
		};

		sliderBlocks: SliderBlock[];

		faq: {
			heading: string;
			questions: Question[];
		};

		orderBlock: {
			heading: string;
			mobileHeading: string;
			form: FormBlock;
		};

		footer: {
			headerClone: LocaleDataType['header'];
			copyright: string;
			socialLinks: SocialLink[];
		};
	}

	interface BacicModuleProps {
		isMobile: boolean;
	}

	type InputTypes = {
		type: InputProps['type'] | 'select' | 'checkbox' | 'maskInput' | string;
		name: string;
		label?: string;
		options?: Options;
		value?: number | string | boolean;
	};

	type AdvantageObject = {
		title: string;
		text: string;
	};

	type LinkType = {
		text: string;
		url: string;
	};

	type SocialLink = {
		icon: IconDefinition;
		url: string;
	};

	type TabType = {
		value: number;
		text: string;
	};

	type SliderDescriptionObject = {
		heading: string;
		description: string[];
	};

	type PriceItem = {
		title: string;
		options: string[];
		beforePrice?: string;
		price: number;
		buttonText: string;
	};

	type SliderBlock = {
		heading: string;
		images: ImageType;
		styles?: { [property: string]: string | number; };
	};

	type FormBlock = {
		heading?: string;
		buttonText: string;
		mobileButtonText: string;
		formInputs: InputTypes[],
	};

	type Question = {
		question: string;
		answer: string;
	};

	type ImageType = {
		high: string[];
		low: string[];
		webp: string[];
	};
}