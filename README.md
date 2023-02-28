# react-native-project

 # First homework: 
- Install expo
- Install Android Studio
- Initialize the project with expo (Choose the blank project template)
- Start project
- Customize Android Studio
- Install expo client on your phone
- Run created project on phone, Android emulator

Screenshots:
- https://ibb.co/wKR9GJy
- https://ibb.co/sJZHHWn
- https://ibb.co/J3C9vb6


# Second Homework:
- Create Folder Screens
- Create a RegistrationScreen component
- Create the LoginScreen component
- Add form markup to RegistrationScreen component
- Add form markup to LoginScreen component
- Add form logic to the RegistrationScreen component
- Add form processing logic to the LoginScreen component
- When submitting forms, collect data from them and output to the console
- Add auto-dismiss keyboards on click outside of forms (Using Keyboard.dismiss)
- Add styles to the RegistrationScreen component
- Add styles to the LoginScreen component

Screenshot from console:
- https://drive.google.com/file/d/1DSn6VKhI0FqA98D2eHddiiSFTzL56zjN/view?usp=share_link

Screenshots from app:
- https://drive.google.com/file/d/1LWkQQcyGv9QNaYMNrEQhhdpbdm7tstRk/view?usp=share_link
- https://drive.google.com/file/d/16Gail1eFv1HCA5kSe3FVDHc-OPz6Xdxl/view?usp=share_link
- https://drive.google.com/file/d/1d0yLIS2WBzV2TvSHlqJcc-6a-1OLWvHc/view?usp=share_link

Video of work:
- https://drive.google.com/file/d/1YB4fTvwfLPNQUBaP_6fMPrZj00XgXYEY/view?usp=share_link
- https://drive.google.com/file/d/1kQLXRHGjCrVvOcaOEWdyA4ioThBSTEKG/view?usp=share_link

# 3rd HomeWork:

- Connect React Native Debugger to the project
- Launch React Native Debugger with a project

Screenshots:
- Element-inspector-ON https://drive.google.com/file/d/1BLtOpJxBUkdHHPnDUgP_bHVF6tl63WYo/view?usp=share_link  
- Remote-debugging-working https://drive.google.com/file/d/1Zrxq9DHpuNzlvUykboAT1Ma9cfjndGBE/view?usp=share_link
- React-native-debugger-app  https://drive.google.com/file/d/1wcJHofiWv9lZQ2d4Iy5BovVn2LaYIPMB/view?usp=share_link
- React-native-debugger-console-working  https://drive.google.com/file/d/1RTwclSgP4WOAd8Skg423HcX9CMB35I4f/view?usp=share_link 

# 4th HomeWork:

- Create PostsScreen
- Create PostsScreen
- Create CommentsScreen
- Create ProfileScreen
- Create a MapScreen
- Create Home Screen
- Connect navigation to the project.
- Add transitions between the LoginScreen and RegistrationScreen screens to the project using the createStackNavigator component
- From the RegistrationScreen you can go to the LoginScreen by clicking on the text Login
- From the LoginScreen you can go to the RegistrationScreen by the text Register
- After submitting in LoginScreen, RegistrationScreen redirects to Home where the PostsScreen screen is immediately shown
- Enable bottom navigation using createBottomTabNavigator
- In the bottom navigation create 3 transitions.
- Clicking on icon #1 takes you to the PostsScreen
- Clicking on icon #2 takes you to the CreatePostsScreen screen
- Clicking on icon #3 takes you to the ProfileScreen
- In the header on the PostsScreen screen, add an icon for logout
- Styling the bottom navigation

Screenshots + Video:
- https://drive.google.com/file/d/1TIF5SA8zvGhCYFjcAAANR3QT_fLw3EpA/view?usp=share_link
- https://drive.google.com/file/d/1noPmpELdbdKjI0pUhn6V5uievorAX9Ys/view?usp=share_link
- https://drive.google.com/file/d/1ZBjRw-PUMs1DKmAAOW_J08bDCaRu8bK7/view?usp=share_link
- https://drive.google.com/file/d/1uvqcBvIApSq2cxrrf2e6VQdtTfF4v4rz/view?usp=share_link

# 5th HomeWork:

- Connect the camera to the CreatePostsScreen component;
- When the CreatePostsScreen screen is opened, the camera is activated and the image from it is displayed in the block with the camera icon
- Clicking on the camera icon takes a picture
- You can add a photo title to the input with the Title placeholder
- You can add the name where the photo was taken to the input with the Placeholder Location.
- Add a geolocation definition at the time of creating a post when clicking on the Publish button
- After creating a post, it should redirect to the PostsScreen screen
- In the individual post component, when clicking on the comments icon, it redirects to the CommentsScreen screen
- In the individual post component, when clicking on the geolocation icon, it redirects to the MapScreen screen where you can see a map with a marker where the photo was taken

Screenshots + Video:
- Comment Screen https://drive.google.com/file/d/1pkls1FvcdZUUODmHhZ0vVaLs9Xeq2CYz/view?usp=share_link
- Create Post Screen https://drive.google.com/file/d/1n3tcqZKP3fbv3t1-1puKI-v5R3IMWpqf/view?usp=share_link
- Map Screen https://drive.google.com/file/d/1IpVQgdQqN6rAKnMgZTxtmbOi8mZm0u7B/view?usp=share_link
- Posts Screen https://drive.google.com/file/d/1nZu4-2_7sskZlPviKfhBo-xq2gS72aOx/view?usp=share_link
- Video https://drive.google.com/file/d/1qhCB60t1koSHxz8iCiNWpElDsNdo8G_y/view?usp=share_link


# 6th HomeWork:

- Connect Redux to the project
- Connect Firebase to the project
- Add registration logic on RegistrationScreen via Firebase methods
- Add login logic on LoginScreen via Firebase methods
- Update the user profile on Firebase and add the login there in the displayName field after registration
- Save user data in Redux after registration or login
- Add a check to see if the user is logged into the application or not. If logged in, then immediately redirect to the PostsScreen screen otherwise - to the LoginScreen screen
- Add logic Logout on PostsScreen when clicking on icon in header using Firebase methods
- Add post loading logic to database using Firebase and Redux
- Add logic for adding a comment under a post using Firebase and Redux

Screenshots:
- firebase-auth-users https://drive.google.com/file/d/1DMyvF1uf4uLmUjSCffg2tF5ScWO2hXZE/view?usp=share_link
- firebase-storage-photoshttps://drive.google.com/file/d/1GGCMTCQJhqAav6Nhon4PPMvvZN3Tae2_/view?usp=share_link
- firestore-database-comments https://drive.google.com/file/d/1gHiVvIwoI2KEdPRYqB9sr4B0Y90Wix7k/view?usp=share_link
- firestore-database1 https://drive.google.com/file/d/1t9tAnhFu_Jp9b4p8d49gNBP04WL7RvCV/view?usp=share_link
- https://drive.google.com/file/d/1ilkwlgH1SOqPe6v4SUhd9CJPrKhh_6Cv/view?usp=share_link
- https://drive.google.com/file/d/1P_RJk2iaJdhsq2cmhEaeMDw3hmEmua2P/view?usp=share_link
- https://drive.google.com/file/d/1tr6erVcX6G9qMuXTNiXsxoj5g5ahD95N/view?usp=share_link
- https://drive.google.com/file/d/16mB9XC2SlCBDwzvQLTqSdrSerY4VhFXF/view?usp=share_link
video:
- https://drive.google.com/file/d/1sWI-NIHlHgaTtt7YNJhiBGINyn0IKOw8/view?usp=share_link

# 7th HomeWork:

- Upload project to expo servers

https://expo.dev/@prorochenko/react-native-projectproject?serviceType=classic&distribution=expo-go&release-channel=react-native-projectproject 

