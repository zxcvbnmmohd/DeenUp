# DeenUp

This project is organized into three branches:

**production** - Production Environment
**staging** - Staging Environment
**dev** - Development Environment

## Local Development Steps

1. Retrieve the trivia.ts from repo owner
2. Place the file inside the root of `src/assets/<here>`.

### Installation Packages

```shell
# Install dependencies
pnpm i

# Configure environment variables
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Drizzle schema to the database
pnpm db:push
```

### Running the apps

#### iOS

1. Make sure you have XCode and XCommand Line Tools installed [as shown on expo docs](https://docs.expo.dev/workflow/ios-simulator).

    > **NOTE:** If you just installed XCode, or if you have updated it, you need to open the simulator manually once. Run `npx expo start` in the root dir, and then enter `I` to launch Expo Go. After the manual launch, you can run `pnpm dev` in the root directory

2. Run the following in the `apps/expo` folder

    ```shell
    pnpm dev:ios
    ```

### Android

1. Install Android Studio tools [as shown on expo docs](https://docs.expo.dev/workflow/android-studio-emulator).

2. Run the following in the `apps/expo` folder

    ```shell
    pnpm dev:android
    ```

### Web

1. Ensure the env variables are populated
2. Run the following in the `apps/nextjs` folder:

    ```shell
    pnpm dev
    ```

> **TIP:** It might be easier to run each app in separate terminal windows, so you get the logs from each app separately. This is also required if you want your terminals to be interactive, e.g. to access the Expo QR code. You can run `pnpm --filter expo dev` and `pnpm --filter nextjs dev` to run each app in a separate terminal window.

## Folder Structure

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ auth-proxy
  |   ├─ Nitro server to proxy OAuth requests in preview deployments
  |   └─ Uses Auth.js Core
  ├─ expo
  |   ├─ Expo SDK 49
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using NativeWind
  |   └─ Typesafe API calls using tRPC
  └─ next.js
      ├─ Next.js 14
      ├─ React 18
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
  ├─ api
  |   └─ tRPC v11 router definition
  ├─ auth
  |   └─ Authentication using next-auth. **NOTE: Only for Next.js app, not Expo**
  ├─ db
  |   └─ Typesafe db calls using Drizzle & Planetscale
  └─ ui
      └─ Start of a UI package for the webapp using shadcn-ui
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

---

## When it's time to add a new package

To add a new package, simply run `pnpm turbo gen init` in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the `package.json`, `tsconfig.json` and a `index.ts`, as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

## Development Workflow

1. Create a New Branch

    Always create branches from the production branch.

    ```shell
    git checkout production
    git pull origin production
    git checkout -b id-branch-name
    ```

2. Local Development and Testing:

    Develop and test the feature locally.

3. Merge to Dev Branch:

    Commit changes, switch to the dev branch, and merge the feature branch into dev.

    ```shell
    git add .
    git commit -m "id - commit message"
    git checkout dev
    git pull origin dev
    git merge id-branch-name
    git push
    ```

4. Create Pull Request to Production:

    Create a PR pointing to the production branch for code review.

5. Code Review:

    Another developer reviews the code changes in the PR. The other developer will either approve the code or request changes. If changes are requested, handle those changes in the created branch and ensure to remerge changes to the dev branch. If PR is approved the approver will update the ticket status to "Deploy To Staging"

6. Merge to Staging Branch:

    After passing code review, an admin of the branch merges into the staging branch.

    ```shell
    git checkout staging
    git pull origin staging
    git merge id-branch-name
    git push
    ```

7. Testing:

    Repo Admin will test the new feature, bug fix, improvement, etc... in the staging environment.

8. Staging Approval:

    If testing fails, the tester will update the status back to "In Progress" and the developer goes back to step 3. If testing passes, repo admin will update status to "Deploy To Production."

9. Merge to Production Branch:

    Merge the branch via PR. Any changes to production MUST be done via approved PRs.

    - If your branch is behind production by more than 1 commit, then sync production to your branch before closing the PR via

        ```shell
        git checkout clickup-id-branch-name
        git pull origin production
        git merge production
        ```

        and handle any possible conflicts carefully. and push changes. Once your branch is up to date then close the PR.

## Notes

-   Always ensure that secrets are securely stored and retrieved for local development.
-   Use meaningful commit messages.
-   Collaborate through PRs to maintain code quality and allow for proper code review.
-   Regularly update your local branches to avoid conflicts.
-   OAuth deployments are now working for preview deployments. Read [deployment guide](https://github.com/t3-oss/create-t3-turbo#auth-proxy) and [check out the source](./apps/auth-proxy) to learn more!
-   The [db](./packages/db) package is preconfigured to use PlanetScale and is **edge-bound** with the [database.js](https://github.com/planetscale/database-js) driver. If you're using something else, make the necessary modifications to the [schema](./packages/db/src/schema) as well as the [client](./packages/db/src/index.ts) and the [drizzle config](./packages/db/drizzle.config.ts). If you want to switch to non-edge database driver, remove `export const runtime = "edge";` [from all pages and api routes](https://github.com/t3-oss/create-t3-turbo/issues/634#issuecomment-1730240214).

## Deployment

### Next.js

#### Prerequisites

> **Note**
> Please note that the Next.js application with tRPC must be deployed in order for the Expo app to communicate with the server in a production environment.

#### Deploy to Vercel

Let's deploy the Next.js application to [Vercel](https://vercel.com). If you've never deployed a Turborepo app there, don't worry, the steps are quite straightforward. You can also read the [official Turborepo guide](https://vercel.com/docs/concepts/monorepos/turborepo) on deploying to Vercel.

1. Create a new project on Vercel, select the `apps/nextjs` folder as the root directory. Vercel's zero-config system should handle all configurations for you.

2. Add your `DATABASE_URL` environment variable.

3. Done! Your app should successfully deploy. Assign your domain and use that instead of `localhost` for the `url` in the Expo app so that your Expo app can communicate with your backend when you are not in development.

### Auth Proxy

The auth proxy is a Nitro server that proxies OAuth requests in preview deployments. This is required for the Next.js app to be able to authenticate users in preview deployments. The auth proxy is not used for OAuth requests in production deployments. To get it running, it's easiest to use Vercel Edge functions. See the [Nitro docs](https://nitro.unjs.io/deploy/providers/vercel#vercel-edge-functions) for how to deploy Nitro to Vercel.

Then, there are some environment variables you need to set in order to get OAuth working:

-   For the Next.js app, set `AUTH_REDIRECT_PROXY_URL` to the URL of the auth proxy.
-   For the auth proxy server, set `AUTH_REDIRECT_PROXY_URL` to the same as above, as well as `AUTH_DISCORD_ID`, `AUTH_DISCORD_SECRET` (or the equivalent for your OAuth provider(s)). Lastly, set `AUTH_SECRET` **to the same value as in the Next.js app** for preview environments.

Read more about the setup in [the auth proxy README](./apps/auth-proxy/README.md).

### Expo

Deploying your Expo application works slightly differently compared to Next.js on the web. Instead of "deploying" your app online, you need to submit production builds of your app to app stores, like [Apple App Store](https://www.apple.com/app-store) and [Google Play](https://play.google.com/store/apps). You can read the full [guide to distributing your app](https://docs.expo.dev/distribution/introduction), including best practices, in the Expo docs.

1. Make sure to modify the `getBaseUrl` function to point to your backend's production URL:

    <https://github.com/t3-oss/create-t3-turbo/blob/656965aff7db271e5e080242c4a3ce4dad5d25f8/apps/expo/src/utils/api.tsx#L20-L37>

2. Let's start by setting up [EAS Build](https://docs.expo.dev/build/introduction), which is short for Expo Application Services. The build service helps you create builds of your app, without requiring a full native development setup. The commands below are a summary of [Creating your first build](https://docs.expo.dev/build/setup).

    ```shell
    # Install the EAS CLI
    pnpm add -g eas-cli

    # Log in with your Expo account
    eas login

    # Configure your Expo app
    cd apps/expo
    eas build:configure
    ```

3. After the initial setup, you can create your first build. You can build for Android and iOS platforms and use different [`eas.json` build profiles](https://docs.expo.dev/build-reference/eas-json) to create production builds or development, or test builds. Let's make a production build for iOS.

    ```shell
    eas build --platform ios --profile production
    ```

    > If you don't specify the `--profile` flag, EAS uses the `production` profile by default.

4. Now that you have your first production build, you can submit this to the stores. [EAS Submit](https://docs.expo.dev/submit/introduction) can help you send the build to the stores.

    ```shell
    eas submit --platform ios --latest
    ```

    > You can also combine build and submit in a single command, using `eas build ... --auto-submit`.

5. Before you can get your app in the hands of your users, you'll have to provide additional information to the app stores. This includes screenshots, app information, privacy policies, etc. _While still in preview_, [EAS Metadata](https://docs.expo.dev/eas/metadata) can help you with most of this information.

6. Once everything is approved, your users can finally enjoy your app. Let's say you spotted a small typo; you'll have to create a new build, submit it to the stores, and wait for approval before you can resolve this issue. In these cases, you can use EAS Update to quickly send a small bugfix to your users without going through this long process. Let's start by setting up EAS Update.

    The steps below summarize the [Getting started with EAS Update](https://docs.expo.dev/eas-update/getting-started/#configure-your-project) guide.

    ```shell
    # Add the `expo-updates` library to your Expo app
    cd apps/expo
    pnpm expo install expo-updates

    # Configure EAS Update
    eas update:configure
    ```

7. Before we can send out updates to your app, you have to create a new build and submit it to the app stores. For every change that includes native APIs, you have to rebuild the app and submit the update to the app stores. See steps 2 and 3.

8. Now that everything is ready for updates, let's create a new update for `production` builds. With the `--auto` flag, EAS Update uses your current git branch name and commit message for this update. See [How EAS Update works](https://docs.expo.dev/eas-update/how-eas-update-works/#publishing-an-update) for more information.

    ```shell
    cd apps/expo
    eas update --auto
    ```

    > Your OTA (Over The Air) updates must always follow the app store's rules. You can't change your app's primary functionality without getting app store approval. But this is a fast way to update your app for minor changes and bug fixes.

9. Done! Now that you have created your production build, submitted it to the stores, and installed EAS Update, you are ready for anything!

## References

The stack originates from [create-t3-app](https://github.com/t3-oss/create-t3-app).

A [blog post](https://jumr.dev/blog/t3-turbo) where I wrote how to migrate a T3 app into this.
