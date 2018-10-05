export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: false,

  // each time the app is run, it will check this manifest and update the firebase database
  // if new entries are there, they will be added, and entries that aren't in the manifest
  // but are in the firebase database will be *removed*
  manifestUrl: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/dataManifest.json',
  // 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/whaledrManifest.json',
  // 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/textWidgetManifest.json',

  // set the type of widget and its properties here.
  widgetType: 'ImageSplat',
  widgetProperties: {
    baseUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/base_{1}.png',
    maskUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/mask_{1}.png',
    contourUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/contour_{1}.png',
    delimiter: '__',
  },

  // widgetType: 'ImageSwipe',
  // widgetProperties: {
  //   imageBaseUrl: 'http://himatdata.s3.amazonaws.com/whaledr_renamed',
  //   imageExt: 'jpg',
  //   soundExt: 'wav',
  // },

  // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

  // this comes from your firebase console
  firebaseKeys: {
    apiKey: 'AIzaSyBGzjnGrXRSkE1Tk61rgR49TN5PnHqOIU4',
    authDomain: 'brainsplat12.firebaseapp.com',
    databaseURL: 'https://brainsplat12.firebaseio.com',
    projectId: 'brainsplat12',
    storageBucket: '',
    messagingSenderId: '574942180600',
  },

  app: {
    navbarVariant: 'secondary',
  },

  // Homepage configuration

  // your app's title and tagline
  home: {
    title: 'brainSpot',
    tagline: 'Help neuroscientists study the brain',
    // background image on Homepage
    backgroundUrl: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/SwipesForScience.svg',
  },

  // Play configuration
  play: {
    blankImage: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/undraw_blank_canvas.svg',

  },

  // Chats configuration
  chats: {
    blankImage: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/undraw_no_data.svg',
  },

  // Profile configuration
  profile: {
    blankImage: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/undraw_chatting.svg',
  },

  // your app's tutorial page
  // describe your problem and the way you want people to annotate
  tutorial: {
    // there is only 1 available custom animiation right now, and its 'Bubbles'
    // customBackgroundAnimation: 'Bubbles',
    // steps have 2 parts, the intro and examples. In the intro you provide
    // text and images. In the examples, you provide text, data pointers, and tutorial steps
    // that the widget will display
    steps: {
      intro: [
        {
          // keep the text really short
          text: 'we want to learn about mental health',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/undraw_doctor_kw5l.svg',
        },
        {
          text: 'most mental disorders are diagnosed between ages 5-20',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/undraw_fatherhood_7i19.svg',
        },
        {
          text: 'the healthy brain network is collecting brain MRI scans \n of adolescents with mental health disorders',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/mri-1485929.svg',
        },
        {
          text: 'can brain images help us understand mental health?',
          image: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/sub-NDARLF283KJX/tiles/base_sag_123.png',
        },
        {
          text: 'to find out, scientists need your help \n to measure the brain',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/master/images/SwipesForScience.svg',
        },
        {
          text: 'here is an mri of the the head',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/00d3b78e/images/brainAlone.png',
        },
        {
          text: 'a computer has colored the brain pixels red \n we count the pixels to measure the volume',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/00d3b78e/images/brainWithMask.png',
        },
        {
          text: 'but sometimes, the computer messes up \n and colors outside the brain',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/18266a4f/images/outOfBounds01.png',
        },
        {
          text: 'so we need your help to spot \n the problem areas',
          image: 'https://cdn.rawgit.com/akeshavan/brainSpot/6f75832b/images/outOfBounds02.png',
        },
      ],
      examples: [
        // {
        //   text: `if you're not sure, click 'help' \n to discuss with scientists ${''}`,
        //   pointer: 'OO4_HYVM1__YDH_2017_10_06T06_48_00',
        //   answer: 0,
        //   tutorialStep: 0,
        // },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        },
      ],
    },
  },
};
