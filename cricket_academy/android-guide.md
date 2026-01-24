# How to Generate the APK

Since this is a web environment, you need to perform the final build step on your local computer to get the `.apk` file.

### Prerequisites
1. Download and install [Node.js](https://nodejs.org/).
2. Download and install [Android Studio](https://developer.android.com/studio).

### Steps to Build APK
1. **Download this project** to your computer.
2. Open a terminal in the project folder and run:
   ```bash
   npm install
   npm run mobile:sync
   npm run mobile:android
   ```
3. Open the `android` folder (created by the command above) in **Android Studio**.
4. Wait for Gradle to sync.
5. Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

Your APK will be generated in `android/app/build/outputs/apk/debug/app-debug.apk`.
