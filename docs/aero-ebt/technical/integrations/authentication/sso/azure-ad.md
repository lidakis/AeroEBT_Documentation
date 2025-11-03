---
sidebar_position: 1
---

# Set Up SSO with Azure AD

---

AeroEBT supports single sign-on (SSO) using Microsoft Azure AD. This guide is designed for IT administrators setting up enterprise authentication for your organization.

## Prerequisites

- Azure Active Directory admin access
- Organization-level access to AeroEBT dashboard
- Team or Enterprise Plan subscription

## Step 1: Add and register an Enterprise application

Open the Azure Active Directory dashboard for your Azure account.

Click the **Add** button then **Enterprise application**.

## Step 2: Choose to create your own application

You'll be using the custom enterprise application setup for AeroEBT.

## Step 3: Fill in application details

In the modal titled **Create your own application**, enter a display name for AeroEBT. This is the name your Azure AD users will see when signing in to AeroEBT from Azure. `AeroEBT` works in most cases.

Make sure to choose the third option: **Integrate any other application you don't find in the gallery (Non-gallery)**.

## Step 4: Set up single sign-on

Before you get to assigning users and groups, which would allow accounts in Azure AD to access AeroEBT, you need to configure the SAML details that allows AeroEBT to accept sign in requests from Azure AD.

## Step 5: Select SAML single sign-on method

AeroEBT only supports the SAML 2.0 protocol for Single Sign-On, which is an industry standard.

## Step 6: Upload SAML-based sign-on metadata file

First you need to download AeroEBT's SAML metadata file. Contact your AeroEBT support representative to obtain this file, or access it through your organization's dashboard at:

`https://[your-instance].ebt.skydynamics.aero/auth/v1/sso/saml/metadata?download=true`

Click on the **Upload metadata file** option in the toolbar and select the file you just downloaded.

All of the correct information should automatically populate the **Basic SAML Configuration** screen.

**Make sure you input these additional settings.**

| Setting     | Value                                      |
| ----------- | ------------------------------------------ |
| Sign on URL | https://[your-instance].ebt.skydynamics.aero/dashboard/sign-in-sso |
| Relay State | https://[your-instance].ebt.skydynamics.aero/dashboard             |

Finally, click the **Save** button to save the configuration.

## Step 7: Obtain metadata URL

Save the link under **App Federation Metadata URL** in **section 3 SAML Certificates**. You will need to enter this URL later in Step 10.

## Step 8: Enable SSO in the Dashboard

1. Visit the SSO tab under the Organization Settings page in your AeroEBT dashboard.
2. Toggle **Enable Single Sign-On** to begin configuration. Once enabled, the configuration form appears.

## Step 9: Configure domains

Enter one or more domains associated with your users email addresses (e.g., `yourcompany.com`). These domains determine which users are eligible to sign in via SSO.

If your organization uses more than one email domain - for example, `company.com` for staff and `contractors.company.com` for contractors - you can add multiple domains here. All listed domains will be authorized for SSO sign-in.

**Note:** We do not permit use of public domains like `gmail.com`, `yahoo.com`.

## Step 10: Configure metadata

Enter the metadata URL you obtained from Step 7 into the Metadata URL field.

## Step 11: Configure attribute mapping

Fill out the Attribute Mapping section using the **Azure** preset.

The following attributes are typically mapped:

| SAML Attribute | User Field | Required |
| -------------- | ---------- | -------- |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | Email | Yes |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname` | First Name | No |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname` | Last Name | No |

## Step 12: Join organization on signup (optional)

By default this setting is disabled, users logging in via SSO will not be added to your organization automatically.

Toggle this on if you want SSO-authenticated users to be **automatically added to your organization** when they log in via SSO.

When auto-join is enabled, you can choose the **default role** for new users. Choose a role that fits the level of access you want to grant to new members.

## Step 13: Save changes and test single sign-on

When you click **Save changes**, your new SSO configuration is applied immediately. From that moment, any user with an email address matching one of your configured domains who visits your organization's sign-in URL will be routed through the SSO flow.

We recommend asking a few users to test signing in via their Azure AD account. They can do this by entering their email address on the Sign in with SSO page.

If SSO sign-in doesn't work as expected, contact your AeroEBT support representative for assistance.

## Troubleshooting

### Common Issues

**Users cannot sign in**
- Verify the domain configuration matches your organization's email domains
- Check that users have been assigned to the enterprise application in Azure AD
- Ensure the SAML metadata URL is correct and accessible

**Attribute mapping errors**
- Verify that the email attribute is correctly mapped
- Check that required attributes are being sent by Azure AD

**Certificate expiration**
- Monitor certificate expiration dates in Azure AD
- Update certificates before they expire to avoid service interruption

### Support

For additional assistance with SSO configuration, please contact:
- Your AeroEBT support representative
- Email: support@skydynamics.aero
- Documentation: https://docs.ebt.skydynamics.aero

