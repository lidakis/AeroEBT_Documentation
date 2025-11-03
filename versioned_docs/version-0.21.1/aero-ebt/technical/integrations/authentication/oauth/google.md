---
sidebar_position: 1
---

# Google OAuth Integration

---

AeroEBT supports OAuth 2.0 authentication with Google accounts. This guide is designed for IT administrators configuring Google sign-in for end users.

## Overview

Google OAuth allows users to sign in to AeroEBT using their Google accounts without requiring enterprise SSO setup. This is ideal for individual users or organizations that don't require SAML-based single sign-on.

## Prerequisites

- Google Cloud Platform (GCP) account with project creation access
- Organization-level or project-level access to AeroEBT dashboard
- Understanding of OAuth 2.0 flow

## Step 1: Create a Google Cloud Project

1. Navigate to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click **Select a project** > **New Project**
3. Enter a project name (e.g., "AeroEBT Integration")
4. Click **Create**


## Step 2: Configure OAuth Consent Screen

1. In your Google Cloud project, navigate to **APIs & Services** > **OAuth consent screen**
2. Select **External** user type (unless you have a Google Workspace account)
3. Fill in the required application information:
   - **App name**: AeroEBT
   - **User support email**: Your support email
   - **Developer contact information**: Your email address
4. Click **Save and Continue**
5. On the **Scopes** page, click **Save and Continue**
6. On the **Test users** page, you can add test users if needed
7. Click **Save and Continue** to finish


## Step 3: Create OAuth 2.0 Credentials

1. Navigate to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth client ID**
3. Select **Web application** as the application type
4. Configure the OAuth client:
   - **Name**: AeroEBT Web Client
   - **Authorized JavaScript origins**: 
     - `https://[your-instance].ebt.skydynamics.aero`
     - `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`
   - **Authorized redirect URIs**:
     - `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`
5. Click **Create**


## Step 4: Retrieve Credentials

After creating the OAuth client, you'll see a dialog with:
- **Client ID**: Copy this value
- **Client Secret**: Copy this value (you'll only see this once)

**Important:** Save these credentials securely. You'll need them in the next step.


## Step 5: Configure Google OAuth in AeroEBT

1. Navigate to your AeroEBT dashboard
2. Go to **Settings** > **Authentication** > **Providers**
3. Find **Google** in the list of providers
4. Click **Configure** or **Enable**
5. Enter the following information:
   - **Client ID**: Paste the Client ID from Step 4
   - **Client Secret**: Paste the Client Secret from Step 4
6. Click **Save**


## Step 6: Test Google Sign-In

1. Navigate to the AeroEBT sign-in page
2. Click **Sign in with Google**
3. You should be redirected to Google's authentication page
4. After granting permissions, you should be redirected back to AeroEBT
5. Verify that you're successfully signed in

## Configuration Options

### Scope Configuration

By default, AeroEBT requests the following OAuth scopes:
- `openid`: OpenID Connect authentication
- `email`: Access to user's email address
- `profile`: Access to user's basic profile information

These scopes provide the minimum necessary information for authentication.

### User Information Mapping

AeroEBT maps the following Google user information:
- **Email**: Used as the primary user identifier
- **First Name**: Extracted from `given_name`
- **Last Name**: Extracted from `family_name`
- **Profile Picture**: Extracted from `picture` (if available)

## Security Considerations

### Client Secret Security

- Never commit the Client Secret to version control
- Store secrets in secure environment variables
- Rotate secrets regularly (every 90 days recommended)
- Use different credentials for development and production environments

### Domain Restrictions

If your organization wants to restrict Google sign-in to specific domains:

1. In Google Cloud Console, go to **APIs & Services** > **OAuth consent screen**
2. Under **Publishing status**, configure **User Type** and **Test users**
3. For production, submit your app for verification if using restricted scopes

### Redirect URI Validation

Ensure that redirect URIs are exactly:
- `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`

Do not include trailing slashes or additional parameters in the redirect URI configuration.

## Troubleshooting

### Common Issues

**"Redirect URI mismatch" error**
- Verify the redirect URI in Google Cloud Console exactly matches: `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`
- Ensure there are no trailing slashes or typos
- Check that both JavaScript origins and redirect URIs are configured correctly

**"Access blocked: This app's request is invalid"**
- Verify the OAuth consent screen is properly configured
- Check that your app is not in a restricted state
- Ensure test users are added if the app is in testing mode

**Users cannot sign in**
- Verify Client ID and Client Secret are correctly entered in AeroEBT
- Check that the Google Cloud project is active
- Ensure OAuth consent screen is published or test users are configured

**Token expiration issues**
- Google OAuth tokens automatically refresh
- If issues persist, verify refresh token is being stored correctly
- Check that the OAuth client is not deleted or disabled

### Debugging Steps

1. **Check browser console**: Look for JavaScript errors
2. **Inspect network requests**: Verify redirects are happening correctly
3. **Review Google Cloud logs**: Check API usage and error logs
4. **Verify credentials**: Ensure Client ID and Secret are active

## Production Deployment

### App Verification

For production use with external users, you may need to submit your OAuth app for verification:

1. Complete all required fields in OAuth consent screen
2. Submit verification request in Google Cloud Console
3. Wait for Google's review and approval
4. Ensure compliance with Google's OAuth verification policies

### Domain Verification

Verify your domain ownership:
1. In Google Cloud Console, go to **APIs & Services** > **OAuth consent screen**
2. Add and verify your domain
3. This adds trust indicators for users signing in

## Support

For additional assistance with Google OAuth configuration, please contact:
- Your AeroEBT support representative
- Email: support@skydynamics.aero
- Documentation: https://docs.ebt.skydynamics.aero

