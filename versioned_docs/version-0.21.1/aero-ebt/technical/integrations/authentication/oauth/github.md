---
sidebar_position: 2
---

# GitHub OAuth Integration

---

AeroEBT supports OAuth 2.0 authentication with GitHub accounts. This guide is designed for IT administrators configuring GitHub sign-in for development teams and organizations.

## Overview

GitHub OAuth allows users to sign in to AeroEBT using their GitHub accounts. This is particularly useful for development teams and organizations that use GitHub for version control and want seamless authentication across platforms.

## Prerequisites

- GitHub account with organization admin access (for organization OAuth apps)
- Organization-level or project-level access to AeroEBT dashboard
- Understanding of OAuth 2.0 flow

## Step 1: Create a GitHub OAuth App

### For Personal/Organization Accounts

1. Navigate to GitHub and sign in
2. Go to **Settings** > **Developer settings** > **OAuth Apps**
3. Click **New OAuth App**
4. Fill in the application details:
   - **Application name**: AeroEBT
   - **Homepage URL**: `https://[your-instance].ebt.skydynamics.aero`
   - **Authorization callback URL**: `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`
5. Click **Register application**


### For GitHub Organizations

If you want to create an organization-level OAuth app:

1. Navigate to your organization's settings
2. Go to **Developer settings** > **OAuth Apps**
3. Click **New OAuth App**
4. Follow the same configuration steps as above


## Step 2: Generate Client Secret

After creating the OAuth app:

1. You'll see your **Client ID** immediately
2. Click **Generate a new client secret**
3. **Important:** Copy the client secret immediately (you can only see it once)
4. Store both Client ID and Client Secret securely


## Step 3: Configure OAuth Scopes

AeroEBT requires the following OAuth scopes:

- `user:email`: Read user email addresses (required)
- `read:user`: Read user profile data

These are the minimum scopes needed for authentication. Additional scopes are not required unless you're integrating GitHub-specific features.

**Note:** AeroEBT follows the principle of least privilege and only requests necessary permissions.

## Step 4: Configure GitHub OAuth in AeroEBT

1. Navigate to your AeroEBT dashboard
2. Go to **Settings** > **Authentication** > **Providers**
3. Find **GitHub** in the list of providers
4. Click **Configure** or **Enable**
5. Enter the following information:
   - **Client ID**: Paste the Client ID from Step 2
   - **Client Secret**: Paste the Client Secret from Step 2
6. Click **Save**


## Step 5: Test GitHub Sign-In

1. Navigate to the AeroEBT sign-in page
2. Click **Sign in with GitHub**
3. You should be redirected to GitHub's authorization page
4. Review the requested permissions and click **Authorize**
5. You should be redirected back to AeroEBT
6. Verify that you're successfully signed in

## Configuration Options

### User Information Mapping

AeroEBT maps the following GitHub user information:
- **Email**: Used as the primary user identifier
- **Username**: GitHub username (`login`)
- **Full Name**: Extracted from `name` field (if available)
- **Profile Picture**: Extracted from `avatar_url`

### Organization Access (Optional)

If you want to restrict access to specific GitHub organizations:

1. In GitHub OAuth app settings, you can configure organization restrictions
2. Users must be members of specified organizations to authenticate
3. This is useful for enterprise deployments

## Security Considerations

### Client Secret Security

- Never commit the Client Secret to version control
- Store secrets in secure environment variables or secret management systems
- Rotate secrets regularly (every 90 days recommended)
- Use different credentials for development and production environments

### Organization Restrictions

For organization-level security:

1. Use GitHub organization OAuth apps instead of personal apps
2. Configure organization-level access controls
3. Use GitHub's organization verification features

### Redirect URI Validation

Ensure that redirect URIs are exactly:
- `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`

GitHub validates redirect URIs strictly. Do not include trailing slashes or additional parameters.

## Advanced Configuration

### GitHub Enterprise Server

If you're using GitHub Enterprise Server, configuration differs:

1. Navigate to your Enterprise Server instance
2. Go to **Site administration** > **OAuth Applications**
3. Create a new OAuth application
4. Use your Enterprise Server URL in the callback URL:
   - `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`

**Note:** Contact AeroEBT support for Enterprise Server configuration assistance.

### Webhook Integration (Optional)

If you want to integrate GitHub webhooks with AeroEBT:

1. Configure webhook endpoints in AeroEBT
2. Set up webhook secrets in GitHub
3. Configure webhook events to listen for
4. See AeroEBT webhook documentation for details

## Troubleshooting

### Common Issues

**"Redirect URI mismatch" error**
- Verify the callback URL in GitHub exactly matches: `https://[your-instance].ebt.skydynamics.aero/auth/v1/callback`
- Ensure there are no trailing slashes or typos
- Check that the OAuth app is in the correct account/organization

**"Application suspended" error**
- GitHub may suspend OAuth apps that violate terms of service
- Verify your OAuth app is not suspended in GitHub settings
- Contact GitHub support if suspension appears incorrect

**Users cannot sign in**
- Verify Client ID and Client Secret are correctly entered in AeroEBT
- Check that the OAuth app is active in GitHub
- Ensure required scopes are granted during authorization

**Email not available**
- Some GitHub users hide their email addresses
- AeroEBT will prompt users to provide email if GitHub doesn't share it
- Configure email visibility in GitHub user settings

**Organization restrictions**
- If organization restrictions are enabled, verify user membership
- Check organization settings in GitHub
- Ensure the OAuth app has access to the organization

### Debugging Steps

1. **Check browser console**: Look for JavaScript errors during redirect
2. **Inspect network requests**: Verify OAuth flow is completing
3. **Review GitHub logs**: Check OAuth app usage in GitHub settings
4. **Verify credentials**: Ensure Client ID and Secret are active and correct
5. **Test with different accounts**: Rule out account-specific issues

### Rate Limiting

GitHub has rate limits for OAuth applications:

- **Unauthenticated requests**: 60 requests per hour per IP
- **Authenticated requests**: 5,000 requests per hour per OAuth token
- **Secondary rate limits**: May apply during high traffic

If you encounter rate limiting:
- Implement request queuing and retry logic
- Use authenticated requests when possible
- Monitor API usage in GitHub

## Best Practices

### For Development Teams

1. Create separate OAuth apps for development, staging, and production
2. Use environment-specific callback URLs
3. Document OAuth app ownership and purpose
4. Regularly review and audit OAuth app usage

### For Organizations

1. Use organization-level OAuth apps for centralized management
2. Implement organization restrictions for access control
3. Monitor OAuth app usage through GitHub audit logs
4. Train team members on OAuth security best practices

## Support

For additional assistance with GitHub OAuth configuration, please contact:
- Your AeroEBT support representative
- Email: support@skydynamics.aero
- Documentation: https://docs.ebt.skydynamics.aero

