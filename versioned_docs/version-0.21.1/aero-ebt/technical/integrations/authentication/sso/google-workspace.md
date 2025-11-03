---
sidebar_position: 2
---

# Set Up SSO with Google Workspace

---

AeroEBT supports single sign-on (SSO) using Google Workspace (formerly known as G Suite). This guide is designed for IT administrators setting up enterprise authentication for your organization.

## Prerequisites

- Google Workspace admin access
- Organization-level access to AeroEBT dashboard
- Team or Enterprise Plan subscription

## Step 1: Open the Google Workspace web and mobile apps console

Navigate to the Google Workspace Admin Console and select **Apps** > **Web and mobile apps**.


## Step 2: Choose to add custom SAML app

From the **Add app** button in the toolbar choose **Add custom SAML app**.


## Step 3: Fill out app details

The information you enter here is for visibility into your Google Workspace. You can choose any values you like. `AeroEBT` as a name works well for most use cases. Optionally enter a description.


## Step 4: Download IdP metadata

This is a very important step. Click on **DOWNLOAD METADATA** and save the file that was downloaded. You will need to upload this file later in Step 10.


**Important:** Make sure the certificate as shown on screen has at least 1 year before it expires. Mark down this date in your calendar so you will be reminded that you need to update the certificate without any downtime for your users.

## Step 5: Add service provider details

Fill out these service provider details on the next screen.

| Detail         | Value                                             |
| -------------- | ------------------------------------------------- |
| ACS URL        | https://[your-instance].ebt.skydynamics.aero/auth/v1/sso/saml/acs      |
| Entity ID      | https://[your-instance].ebt.skydynamics.aero/auth/v1/sso/saml/metadata |
| Start URL      | https://[your-instance].ebt.skydynamics.aero/dashboard                    |
| Name ID format | PERSISTENT                                        |
| Name ID        | _Basic Information > Primary email_               |


## Step 6: Configure attribute mapping

Attribute mappings allow AeroEBT to get information about your Google Workspace users on each login.

**A _Primary email_ to `email` mapping is required.** Other mappings shown below are optional and configurable depending on your Google Workspace setup. If in doubt, replicate the same config as shown.

Any changes you make from this screen will be used later in Step 11: Configure Attribute Mapping.


Recommended attribute mappings:

| Google Workspace Attribute | SAML Attribute Name | User Field |
| -------------------------- | ------------------- | ---------- |
| Primary email              | email               | Email (required) |
| First name                 | first_name          | First Name |
| Last name                  | last_name           | Last Name |

## Step 7: Configure user access

You can configure which Google Workspace user accounts will get access to AeroEBT. This is important if you wish to limit access to your software engineering teams.

You can configure this access by clicking on the **User access** card (or down-arrow). Follow the instructions on screen.


Changes from this step sometimes take a while to propagate across Google's systems. Wait at least 15 minutes before testing your changes.

### User Access Options

- **Turn ON for everyone**: All users in your organization can access AeroEBT
- **Turn ON for selected organizational units**: Only specific departments or groups can access
- **Turn OFF for everyone**: Disable access for all users

## Step 8: Enable SSO in the Dashboard

1. Visit the SSO tab under the Organization Settings page in your AeroEBT dashboard.
   

2. Toggle **Enable Single Sign-On** to begin configuration. Once enabled, the configuration form appears.


## Step 9: Configure domains

Enter one or more domains associated with your users email addresses (e.g., `yourcompany.com`). These domains determine which users are eligible to sign in via SSO.


If your organization uses more than one email domain - for example, `company.com` for staff and `contractors.company.com` for contractors - you can add multiple domains here. All listed domains will be authorized for SSO sign-in.


**Note:** We do not permit use of public domains like `gmail.com`, `yahoo.com`.

## Step 10: Configure metadata

Upload the metadata file you downloaded in Step 4 into the Metadata Upload File field.


Alternatively, you can provide the metadata URL if available from your Google Workspace configuration.

## Step 11: Configure attribute mapping

Enter the SAML attributes you filled out in Step 6 into the Attribute Mapping section.


If you did not customize your settings you may save some time by clicking the **Google Workspace** preset.

The default attribute mapping includes:

| SAML Attribute | User Field | Required |
| -------------- | ---------- | -------- |
| `email` | Email | Yes |
| `first_name` | First Name | No |
| `last_name` | Last Name | No |

## Step 12: Join organization on signup (optional)

By default this setting is disabled, users logging in via SSO will not be added to your organization automatically.


Toggle this on if you want SSO-authenticated users to be **automatically added to your organization** when they log in via SSO.


When auto-join is enabled, you can choose the **default role** for new users:


Choose a role that fits the level of access you want to grant to new members.

## Step 13: Save changes and test single sign-on

When you click **Save changes**, your new SSO configuration is applied immediately. From that moment, any user with an email address matching one of your configured domains who visits your organization's sign-in URL will be routed through the SSO flow.

We recommend asking a few users to test signing in via their Google Workspace account. They can do this by entering their email address on the Sign in with SSO page.

If SSO sign-in doesn't work as expected, contact your AeroEBT support representative for assistance.

## Troubleshooting

### Common Issues

**Users cannot sign in**
- Verify the domain configuration matches your organization's email domains
- Check that users have been granted access in Google Workspace
- Wait at least 15 minutes after changing user access settings
- Ensure the metadata file is correctly uploaded

**Certificate expiration**
- Google Workspace certificates typically expire after 1 year
- Set a calendar reminder to update certificates before expiration
- Download and upload new metadata when certificate is renewed

**Attribute mapping errors**
- Verify that the email attribute is correctly mapped as `email`
- Ensure Primary email is mapped to the email field
- Check that required attributes are being sent by Google Workspace

### Support

For additional assistance with SSO configuration, please contact:
- Your AeroEBT support representative
- Email: support@skydynamics.aero
- Documentation: https://docs.ebt.skydynamics.aero

