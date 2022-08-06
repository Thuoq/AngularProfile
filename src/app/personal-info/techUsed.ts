interface ITechUsed {
  id: number;
  title: string;
  imageUrl: string;
  numberExperience: number;
  experienceType: string;

}

export const TechUsedData: ITechUsed[] = [
  {
    id: 1,
    title: 'Angular',
    imageUrl: '/assets/images/logos/Angular.svg',
    numberExperience: 6,
    experienceType: 'month'
  },
  {
    id: 2,
    title: 'React',
    imageUrl: '/assets/images/logos/react.svg',
    numberExperience: 6,
    experienceType: 'month'
  },
  {
    id: 3,
    title: 'VueJs',
    imageUrl: '/assets/images/logos/vue.svg',
    numberExperience: 6,
    experienceType: 'month'
  },
  {
    id: 4,
    title: 'NestJs',
    imageUrl: '/assets/images/logos/nestjs-icon.svg',
    numberExperience: 1,
    experienceType: 'year'
  },
  {
    id: 5,
    title: 'NodeJs',
    imageUrl: '/assets/images/logos/nodejs-icon.svg',
    numberExperience: 1,
    experienceType: 'year'
  },
  {
    id: 6,
    title: 'Express',
    imageUrl: '/assets/images/logos/express.svg',
    numberExperience: 1,
    experienceType: 'year'
  },
  {
    id: 7,
    title: 'Typescript',
    imageUrl: '/assets/images/logos/typescript.svg',
    numberExperience: 6,
    experienceType: 'month'
  }
];
