const RECORDS_PER_FETCH = 10;

export const data = [
  {
    id: 1,
    title: 'Jaki trening wybrac na poczatek',
    author: 'Antoni Kowalski',
    avatar: 'face1.png',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: ['woman.jpg'],
  },
  {
    id: 2,
    title: 'Wtorkowa medytacja',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: ['leaf.jpg'],
  },
  {
    id: 3,
    title: 'Wtorkowa medytacja',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 4,
    title: 'Wtorkowa medytacja',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 5,
    title: 'Wtorkowa medytacja',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 6,
    title: 'Wtorkowa medytacja',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 7,
    title: 'Wtorkowa medytacja',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 8,
    title: 'Wtorkowa medytacja',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-01 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 9,
    title: 'Ostatni wpis na liscie',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-12 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 10,
    title: 'Ostatni wpis na liscie',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-12 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 11,
    title: 'Ostatni wpis na liscie',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-12 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 12,
    title: 'Ostatni wpis na liscie',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-12 10:00:00',
    heart: 32,
    images: [],
  },
  {
    id: 13,
    title: 'Ostatni wpis na liscie',
    author: 'Wiktor Noculski',
    avatar: 'baby.jpeg',
    description:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    added: '2022-01-12 10:00:00',
    heart: 32,
    images: [],
  },
];

export const fetchResults = (startingId = 0) => {
  let obj = [];

  for (let i = startingId; i < startingId + RECORDS_PER_FETCH; i++) {
    if (data[i] === undefined) {
      break;
    }

    obj.push(data[i]);
  }
  return obj;
};
