/* eslint-disable camelcase */

module.exports = {
  config: {
    steps: 12
  },
  colors: [
    {
      name: 'Blue',
      default: 50,
      specs: {
        hue_start: 210,
        hue_end: 200,
        hue_curve: 'easeInQuad',
        sat_steps: [
          4.8, 17, 31, 50.2, 62.7, 72.8, 80.9, 87.2, 92, 95.3, 97.6, 99
        ],
        lum_steps: [
          98.8, 93, 90, 90, 83, 77, 69.5, 59, 47, 35, 22.6, 11
        ]
      }
    },
    {
      name: 'Gray',
      default: 50,
      specs: {
        hue_start: 220,
        hue_end: 200,
        hue_curve: 'easeInQuad',
        sat_steps: [
          0.5, 1, 2, 3.5, 5.4, 8, 11, 15, 19, 22.5, 26.5, 30
        ],
        lum_steps: [
          97, 87, 78, 68, 58, 51, 44, 37, 29, 22.1, 15.3, 9
        ]
      }
    },
    {
      name: 'Red',
      default: 50,
      specs: {
        hue_start: 355,
        hue_end: 360,
        hue_curve: 'easeOutQuad',
        sat_steps: [
          5, 17, 33, 50, 60, 65, 75, 75, 74, 73, 73, 73
        ],
        lum_steps: [
          99, 98, 100, 100, 97.4, 90, 84, 70, 54, 41, 27, 14
        ]
      }
    },
    {
      name: 'Yellow',
      default: 50,
      specs: {
        hue_steps: [
          51, 47, 48, 48, 48, 44, 42, 41.2, 40.7, 40.3, 40, 40
        ],
        sat_steps: [
          8, 27, 56, 80, 100, 100, 100, 100, 100, 100, 100, 100
        ],
        lum_steps: [
          99, 96, 95, 94, 87, 75.1, 61.6, 49, 40.5, 31, 20, 11
        ]
      }
    },
    {
      name: 'Green',
      default: 50,
      specs: {
        hue_steps: [
          129, 130, 130, 135, 137.6, 135.5, 133.8, 132.5, 131.5, 130.8, 130.3, 130
        ],
        sat_steps: [
          5, 20, 53, 85.6, 100, 100, 100, 100, 100, 100, 100, 100
        ],
        lum_steps: [
          98, 90, 87, 82, 73, 64, 54, 44, 36, 27, 19, 11
        ]
      }
    },
    {
      name: 'Pink',
      default: 50,
      specs: {
        hue_start: 340,
        hue_end: 330,
        hue_curve: 'easeInQuad',
        sat_steps: [
          5, 15, 32, 45.9, 57.1, 66.4, 73.7, 79.3, 83.6, 86.7, 88.8, 90
        ],
        lum_steps: [
          96, 95, 97, 95, 92, 89, 79, 67, 55, 44, 31, 15
        ]
      }
    }
  ]
}
