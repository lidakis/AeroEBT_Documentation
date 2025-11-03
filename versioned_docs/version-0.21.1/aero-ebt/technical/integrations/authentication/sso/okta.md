---
sidebar_position: 3
---

# Set Up SSO with Okta

---

AeroEBT supports single sign-on (SSO) using Okta. This guide is designed for IT administrators setting up enterprise authentication for your organization.

## Prerequisites

- Okta administrator access
- Organization-level access to AeroEBT dashboard
- Team or Enterprise Plan subscription

## Step 1: Add AeroEBT application in Okta

Log in to your Okta Admin Console and navigate to **Applications** > **Applications**.

Click **Browse App Catalog** and search for "AeroEBT". If AeroEBT is not available in the catalog, click **Create App Integration** instead.


## Step 2: Create SAML 2.0 integration

Select **SAML 2.0** as the sign-in method for your app integration.


Click **Next** to proceed.

## Step 3: Configure general settings

Enter the following information:

- **App name**: `AeroEBT` (or your preferred name)
- **App logo**: Optional - you can upload the AeroEBT logo
- **App visibility**: Choose whether to show the app icon to users

Click **Next** to continue.


## Step 4: Configure SAML settings

Fill out the SAML 2.0 configuration with the following details:

| Setting | Value |
| ------- | ----- |
| Single sign on URL | `https://[your-instance].ebt.skydynamics.aero/auth/v1/sso/saml/acs` |
| Audience URI (SP Entity ID) | `https://[your-instance].ebt.skydynamics.aero/auth/v1/sso/saml/metadata` |
| Default RelayState | `https://[your-instance].ebt.skydynamics.aero/dashboard` |
| Name ID format | `EmailAddress` or `Persistent` |
| Application username | `Email` |


### Attribute Statements (Optional)

Configure these attribute statements to pass user information:

| Name | Value | Name Format |
| ---- | ----- | ----------- |
| email | user.email | Unspecified |
| firstName | user.firstName | Unspecified |
| lastName | user.lastName | Unspecified |

## Step 5: Configure user provisioning (optional)

You can configure automatic user provisioning if needed. This is optional and can be configured later.

For now, select **I'm an Okta customer adding an internal app** and click **Finish**.


## Step 6: Assign users and groups

After creating the application, assign users or groups who should have access to AeroEBT.

1. Click on the **Assignments** tab
2. Click **Assign** > **Assign to People** or **Assign to Groups**
3. Select the users or groups that should have access


## Step 7: Obtain SAML metadata

You'll need to get the SAML metadata from Okta to configure AeroEBT. There are two ways to do this:

### Option A: Download metadata file

1. Go to the **Sign On** tab of your application
2. Click **View SAML setup instructions**
3. Find the **SAML 2.0 Endpoints** section
4. Right-click on the **Identity Provider metadata** link and save the file


### Option B: Use metadata URL

Copy the **Identity Provider metadata** URL from the SAML setup instructions. This URL will be used in Step 10.

The URL typically looks like:
```
https://your-org.okta.com/app/[app-id]/sso/saml/metadata
```

## Step 8: Enable SSO in the Dashboard

1. Visit the SSO tab under the Organization Settings page in your AeroEBT dashboard.
   

2. Toggle **Enable Single Sign-On** to begin configuration. Once enabled, the configuration form appears.


## Step 9: Configure domains

Enter one or more domains associated with your users email addresses (e.g., `yourcompany.com`). These domains determine which users are eligible to sign in via SSO.


If your organization uses more than one email domain - for example, `company.com` for staff and `contractors.company.com` for contractors - you can add multiple domains here. All listed domains will be authorized for SSO sign-in.


**Note:** We do not permit use of public domains like `gmail.com`, `yahoo.com`.

## Step 10: Configure metadata

Enter the metadata URL or upload the metadata file you obtained from Step 7:


- **Option 1**: Upload the metadata file you downloaded
- **Option 2**: Enter the metadata URL from Okta

## Step 11: Configure attribute mapping

Fill out the Attribute Mapping section. You can use the **Okta** preset or configure manually:


The default Okta attribute mappings are:

| SAML Attribute | User Field | Required |
| -------------- | ---------- | -------- |
| `email` or `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | Email | Yes |
| `firstName` or `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname` | First Name | No |
| `lastName` or `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname` | Last Name | No |

## Step 12: Join organization on signup (optional)

By default this setting is disabled, users logging in via SSO will not be added to your organization automatically.


Toggle this on if you want SSO-authenticated users to be **automatically added to your organization** when they log in via SSO.


When auto-join is enabled, you can choose the **default role** for new users:


Choose a role that fits the level of access you want to grant to new members.

## Step 13: Save changes and test single sign-on

When you click **Save changes**, your new SSO configuration is applied immediately. From that moment, any user with an email address matching one of your configured domains who visits your organization's sign-in URL will be routed through the SSO flow.

We recommend asking a few users to test signing in via their Okta account. They can do this by entering their email address on the Sign in with SSO page.

### Testing SSO

1. Have a test user navigate to your organization's SSO sign-in page
2. Enter their email address
3. They should be redirected to Okta for authentication
4. After successful authentication, they should be redirected back to AeroEBT

If SSO sign-in doesn't work as expected, contact your AeroEBT support representative for assistance.

## Troubleshooting

### Common Issues

**Users cannot sign in**
- Verify the domain configuration matches your organization's email domains
- Check that users have been assigned to the application in Okta
- Ensure the SAML metadata URL is correct and accessible
- Verify that the application is active in Okta

**Redirect loop or authentication errors**
- Check that the ACS URL matches exactly: `https://[your-instance].ebt.skydynamics.aero/auth/v1/sso/saml/acs`
- Verify the Entity ID is correct
- Ensure the certificate in Okta is valid and not expired

**Attribute mapping errors**
- Verify that the email attribute is correctly mapped
- Check that required attributes are being sent by Okta
- Review the SAML response in browser developer tools (Network tab) to see what attributes are being sent

**Certificate expiration**
- Okta certificates typically expire after 1 year
- Set a calendar reminder to update certificates before expiration
- Download and upload new metadata when certificate is renewed

### Debugging SAML Issues

If you encounter issues, you can:

1. **Check SAML response**: Use browser developer tools (F12) > Network tab to inspect the SAML response
2. **Enable SAML debugging**: In Okta, you can enable SAML debugging in the application's Sign On tab
3. **Review logs**: Check both Okta and AeroEBT logs for authentication errors

### Support

For additional assistance with SSO configuration, please contact:
- Your AeroEBT support representative
- Email: support@skydynamics.aero
- Documentation: https://docs.ebt.skydynamics.aero

