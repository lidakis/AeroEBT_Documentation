---
sidebar_position: 3
---

# Apple Sign-In Integration

---

AeroEBT supports Sign in with Apple authentication. This guide is designed for IT administrators configuring Apple authentication for iOS, macOS, and web applications.

## Overview

Sign in with Apple allows users to authenticate using their Apple ID. This provides a privacy-focused authentication method that's particularly relevant for iOS/macOS applications and organizations that prioritize user privacy.

## Prerequisites

- Apple Developer account with admin access
- Apple Developer Program membership (paid account required)
- Organization-level or project-level access to AeroEBT dashboard
- Understanding of OAuth 2.0 and OpenID Connect

## Step 1: Create a Services ID in Apple Developer

1. Sign in to [Apple Developer](https://developer.apple.com/)
2. Navigate to **Certificates, Identifiers & Profiles**
3. Select **Identifiers** from the sidebar
4. Click the **+** button to create a new identifier
5. Select **Services IDs** and click **Continue**
6. Enter a description: `AeroEBT Web Authentication`
7. Enter an identifier: `com.yourcompany.aeroebt.web` (use reverse domain notation)
8. Check **Sign in with Apple**
9. Click **Continue** then **Register**


## Step 2: Configure Sign in with Apple

1. Select the Services ID you just created
2. Check **Sign in with Apple** and click **Configure**
3. Configure the following:

### Primary App ID

- Select your primary App ID (or create one if needed)
- This links the web authentication to your app

### Website URLs

- **Domains and Subdomains**: `[your-instance].ebt.skydynamics.aero`
- **Return URLs**: 
  - `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`

4. Click **Save** then **Continue** then **Register**


## Step 3: Create a Key for Sign in with Apple

1. In Apple Developer, navigate to **Certificates, Identifiers & Profiles**
2. Select **Keys** from the sidebar
3. Click the **+** button to create a new key
4. Enter a key name: `AeroEBT Sign in with Apple`
5. Check **Sign in with Apple**
6. Click **Configure** and select your Primary App ID
7. Click **Save** then **Continue** then **Register**

**Important:** Download the key file (`.p8`) immediately. You can only download it once.


## Step 4: Create a Client Secret

Apple requires a JWT (JSON Web Token) as the client secret. You'll need to generate this using the key you created.

### Option A: Use AeroEBT's Client Secret Generator

1. In AeroEBT dashboard, go to **Settings** > **Authentication** > **Providers**
2. Find **Apple** and click **Configure**
3. Use the **Generate Client Secret** tool if available
4. Upload your `.p8` key file
5. The system will generate and store the client secret automatically

### Option B: Generate Manually (Advanced)

If you need to generate the client secret manually:

1. Use the Apple client secret generator or JWT library
2. Create a JWT with:
   - **Issuer (iss)**: Your Team ID (found in Apple Developer account)
   - **Issued at (iat)**: Current timestamp
   - **Expiration (exp)**: Timestamp + 6 months (max validity)
   - **Audience (aud)**: `https://appleid.apple.com`
   - **Subject (sub)**: Your Services ID (e.g., `com.yourcompany.aeroebt.web`)
3. Sign with the `.p8` private key using ES256 algorithm

**Note:** Client secrets expire after 6 months and must be regenerated.

## Step 5: Configure Apple Sign-In in AeroEBT

1. Navigate to your AeroEBT dashboard
2. Go to **Settings** > **Authentication** > **Providers**
3. Find **Apple** in the list of providers
4. Click **Configure** or **Enable**
5. Enter the following information:
   - **Services ID**: The identifier from Step 1 (e.g., `com.yourcompany.aeroebt.web`)
   - **Team ID**: Your Apple Developer Team ID (found in membership details)
   - **Key ID**: The Key ID from the key created in Step 3
   - **Private Key**: The `.p8` key file content OR the generated client secret
6. Click **Save**


## Step 6: Test Apple Sign-In

1. Navigate to the AeroEBT sign-in page
2. Click **Sign in with Apple**
3. You should be redirected to Apple's authentication page
4. Sign in with your Apple ID
5. Grant permissions (if prompted)
6. You should be redirected back to AeroEBT
7. Verify that you're successfully signed in

## Configuration Options

### User Information Sharing

Apple provides different levels of user information:

- **Email (always shared)**: If user chooses to share real email
- **Email (private relay)**: If user chooses to hide email (Apple forwards emails)
- **Name (optional)**: First and last name (only on first sign-in)

AeroEBT handles all of these scenarios:
- Private relay emails are supported and forwarded correctly
- Name information is captured on first sign-in
- Email is always used as the primary identifier

### Scope Configuration

Sign in with Apple supports:
- `email`: User's email address
- `name`: User's first and last name (optional)

AeroEBT requests both scopes to provide the best user experience.

## Security Considerations

### Private Key Security

- Never commit the `.p8` private key to version control
- Store keys in secure environment variables or secret management systems
- Rotate keys regularly (annually recommended)
- Use different keys for development and production environments

### Client Secret Expiration

- Apple client secrets expire after 6 months
- Set up automated renewal before expiration
- Monitor expiration dates and renew proactively
- AeroEBT can automatically renew client secrets if configured

### Domain Verification

- Ensure your domain is properly verified in Apple Developer
- DNS verification may be required
- Keep domain ownership verification current

### Email Privacy

- Be prepared to handle private relay emails (`@privaterelay.appleid.com`)
- These emails are forwarded by Apple to the user's real email
- Do not treat private relay emails as invalid
- Users can disable email forwarding in their Apple ID settings

## Advanced Configuration

### iOS/macOS App Integration

If you have native iOS or macOS apps:

1. Configure the same Services ID for web and native apps
2. Use the same Team ID across platforms
3. Ensure bundle IDs match your App ID configuration
4. Native apps can share authentication state with web

### Domain and Subdomain Configuration

Apple allows multiple return URLs:
- `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`
- `https://[your-instance].ebt.skydynamics.aero/auth/callback` (alternative)

Ensure all legitimate callback URLs are registered.

## Troubleshooting

### Common Issues

**"Invalid client" error**
- Verify Services ID, Team ID, and Key ID are correct
- Ensure the client secret (JWT) is valid and not expired
- Check that the key is enabled for Sign in with Apple

**"Invalid redirect_uri" error**
- Verify return URL exactly matches: `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`
- Check domain configuration in Apple Developer
- Ensure no trailing slashes or typos

**Users cannot sign in**
- Verify all credentials are correctly entered in AeroEBT
- Check that the Services ID is properly configured
- Ensure domain verification is complete
- Test with different Apple IDs to rule out account-specific issues

**Client secret expiration**
- Apple client secrets expire after 6 months
- Check expiration date in the JWT payload
- Regenerate client secret before expiration
- Implement automated renewal process

**Email not received (private relay)**
- Verify email forwarding is enabled in user's Apple ID settings
- Check that AeroEBT handles private relay emails correctly
- Users may need to check their Apple ID email forwarding settings

### Debugging Steps

1. **Check JWT validity**: Decode and verify the client secret JWT
2. **Verify domain configuration**: Check Apple Developer Services ID settings
3. **Inspect browser console**: Look for JavaScript errors during redirect
4. **Review Apple logs**: Check App Store Connect for authentication errors
5. **Test with different devices**: Rule out device-specific issues

### Certificate and Key Issues

**Key file missing**
- If you lost the `.p8` file, you must create a new key
- Old keys cannot be re-downloaded
- Update AeroEBT configuration with new key

**Invalid key format**
- Ensure key is in `.p8` format (PEM format)
- Check file encoding (should be UTF-8)
- Verify key content starts with `-----BEGIN PRIVATE KEY-----`

## Best Practices

### Client Secret Management

1. Implement automated client secret renewal
2. Monitor expiration dates (set alerts 30 days before expiration)
3. Use secret management systems for key storage
4. Document key rotation procedures

### User Experience

1. Provide clear instructions for Apple Sign-In
2. Handle private relay emails transparently
3. Support name collection on first sign-in only
4. Implement graceful fallback if Apple Sign-In fails

### Security

1. Regularly rotate signing keys
2. Monitor authentication logs for anomalies
3. Implement rate limiting on authentication endpoints
4. Use HTTPS for all authentication flows

## Production Deployment

### App Store Review

If your app is distributed through the App Store:
- Ensure Sign in with Apple is properly implemented
- Follow Apple's Human Interface Guidelines
- Be prepared to explain authentication flow during review

### Domain Verification

For production:
1. Complete domain verification in Apple Developer
2. Maintain DNS records for verification
3. Keep domain ownership current
4. Document verification status

## Support

For additional assistance with Apple Sign-In configuration, please contact:
- Your AeroEBT support representative
- Email: support@skydynamics.aero
- Documentation: https://docs.ebt.skydynamics.aero

