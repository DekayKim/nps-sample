module.exports = `
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta content="true" name="HandheldFriendly">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- So that mobile will display zoomed in -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting"> <!-- Fix iOS mail formatting  https://litmus.com/blog/what-email-marketers-need-to-know-about-ios-11-and-the-new-iphones -->
    <title>Mailchimp Survey Template</title>
    
      <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
      <style type='text/css'>
          table,tbody,tr,td{border-collapse:collapse !important;mso-table-lspace:0 !important;mso-table-rspace:0 !important}.b2{width:3px !important}.b1{width:43px !important}
       </style>
       <[endif]-->
    
    
      <style type="text/css">
        body {
  margin: 0;
  padding: 0;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: none;
}

font {
  vertical-align: baseline !important;
}

table {
  border-spacing: 0px;
}

table td {
  border-collapse: collapse;
}

.ExternalClass {
  width: 100%;
}

.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
  line-height: 100%;
}

.ReadMsgBody {
  width: 100%;
  background-color: #ebebeb;
}

table {
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
}

img {
  -ms-interpolation-mode: bicubic;
}

.yshortcuts a {
  border-bottom: none !important;
}

span[class="preheader"] {
  display: none !important;
}

a.number {
  display: inline-block;
  font-size: 16px;
}

.ios-footer a {
  color: #aaaaaa !important;
  text-decoration: underline;
}

* {
  text-rendering:optimizelegibility;
  -webkit-font-smoothing:antialiased;
}

.logo {
   max-width: 200px;
}

table[class="force-row"] {
  display: inline;
}

@media only screen and (max-width: 600px) {
  *[class="gmail-fix"] {
    display: none !important;
  }
}

@media screen and (max-width: 599px) {
  table[class="force-row"],
  table[class="container"] {
    display: block;
    width: 100% !important;
    max-width: 100% !important;
  }

  td[class="pullup"] {
    padding-top: 0 !important;
  }

  a.number {
    display:inline;
    padding: 12px;
    font-family: Arial,sans-serif;
    color:#253746;
    text-decoration:none;
    white-space:nowrap;
  }

  table[class="hidetable"] {
    display: none;
  }

  td[class="col"] {
    width: 100% !important;
  }

  td[class="cols-wrapper"] {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  img[class="image"] {
    float: right;
    max-width: 40% !important;
    height: auto !important;
    margin-left: 12px;
  }

  div[class="subtitle"] {
    margin-top: 0 !important;
  }

  a[class="number"] {
    width: 100%;
    font-size: 20px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  span[class=show1]:after {
    font-family:'Helvetica Neue', Helvetica,Arial,sans-serif;
    color:#737373;
    text-decoration:none;
    white-space:nowrap;
    content: '- Extremely likely';
    font-size: 20px;
  }

  span[class=show2]:after{
    font-family:'Helvetica Neue', Helvetica,Arial,sans-serif;
    color:#737373;
    text-decoration:none;
    white-space:nowrap;
    content: '- Not at all likely';
    font-size: 20px;
  }
}

@media screen and (max-width: 400px) {
  td[class*="container-padding"] {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  td[class="cols-wrapper"] {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  td[class="content-wrapper"] {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}

      </style>
    
    
      <style type="text/css">
        /*
@tab Footer
@section footer style
@tip Set the background color and top border for your email's footer area.
@theme footer
 */
#templateFooter{
    /*@editable*/background-color:#FDFDFD;
    /*@editable*/border-top:0;
}

/*
@tab Footer
@section footer text
@tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
@theme footer
 */
.footerContent div{
    /*@editable*/color:#253746;
    /*@editable*/font-family:Arial;
    /*@editable*/font-size:12px;
    /*@editable*/line-height:125%;
    /*@editable*/text-align:left;
}

/*
@tab Footer
@section footer link
@tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
 */
.footerContent div a:link,.footerContent div a:visited{
    /*@editable*/color:#253746;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
}

.footerContent img{
    display:inline;
}

/*
@tab Footer
@section social bar style
@tip Set the background color and border for your email's footer social bar.
 */
#social{
    /*@editable*/background-color:#FAFAFA;
    /*@editable*/border:1px solid #F5F5F5;
}

/*
@tab Footer
@section social bar style
@tip Set the background color and border for your email's footer social bar.
 */
#social div{
    /*@editable*/text-align:center;
}

/*
@tab Footer
@section utility bar style
@tip Set the background color and border for your email's footer utility bar.
 */
#utility{
    /*@editable*/background-color:#FDFDFD;
    /*@editable*/border-top:1px solid #F5F5F5;
}

/*
@tab Footer
@section utility bar style
@tip Set the background color and border for your email's footer utility bar.
 */
#utility div{
    /*@editable*/text-align:center;
}

#monkeyRewards img{
    max-width:160px;
}

      </style>
    
    <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
      <style type='text/css'>
        .col {
          padding-left: 7px !important;
        }
      </style>
   <[endif]-->
    <style type="text/css">
      @media screen and (max-width: 599px) {
        span[class='NPS-show-first-anchor']:after {
          font-family: Arial,sans-serif;
          display: inline !important;
          color: #253746;
          text-decoration: none;
          white-space: nowrap;
          
          content: '- 전혀 아니다';
          
          font-size: 20px;
        }
        span[class='NPS-show-last-anchor']:after {
          font-family: Arial,sans-serif;
          color: #253746;
          text-decoration: none;
          white-space: nowrap;
          
          content: '- 매우 그렇다';
          
          display: inline !important;
          font-size: 20px;
        }
        table[class="force-row"],
        table[class="container"] {
          max-width: 100% !important;
          table-layout: fixed;
          width: 100% !important;
        }
        table[class="hidetable"] {
          display: none;
        }
        table[class="survey-wrapper"] {
          table-layout: fixed !important;
          width: 100% !important;
        }
        td[class="survey-web"] {
          width: 100% !important;
          display: none !important;
        }
        table[class="survey-mobile"] {
          display: block !important;
          height: max-content !important;
          visibility: visible !important;
          width: 100%;
        }
        .full-width {
          min-width: 100% !important;
          width: 100% !important;
        }
        td[class="col"] {
          min-width: 100% !important;
          width: 100% !important;
        }
        td[class="cols-wrapper"] {
          height: max-content !important;
          min-width: 100% !important;
          padding-left: 12px !important;
          padding-right: 12px !important;
          padding-top: 18px;
          width: 100% !important;
        }
        img[class="image"] {
          float: right;
          max-width: 40% !important;
          height: auto !important;
          margin-left: 12px;
        }
        div[class="subtitle"] {
          margin-top: 0 !important;
        }
        a[class="number"] {
          min-width: 100% !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        span[class=show1] a:after {
          content: ' - 매우 그렇다'
        }
        span[class=show2] a:after {
          content: ' - 전혀 아니다'
        }
      }

      @media screen and (max-width: 400px) {
        td[class*="container-padding"],
        td[class="cols-wrapper"],
        td[class="content-wrapper"] {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
      }
    </style>
  </head>

  <body style="margin:0; padding-top:0;padding-bottom:0;padding-left:12px;padding-right:12px;background:#fafafa;" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa;">
      <tr class="gmail-fix">
        <td>
          <table cellpadding="0" cellspacing="0" border="0" width="600">
            <tr>
              <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 600px;">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" valign="top" style="background-color: #fafafa;">
          <br>
          <table border="0" width="600" cellpadding="0" cellspacing="0" class="container" style="width:600px;max-width:600px;background-color:#ffffff;border:1px solid #ebebeb">
            <tr>
              <td class="container-padding header" align="center" style="background-color:#ffffff;padding-top:36px;padding-bottom:12px;">
                <img src="" class="logo" />
              </td>
            </tr>
            <tr>
              <td class="content" align="left" style="padding-top:12px;padding-bottom:18px;background-color:#ffffff">
                <table width="600" border="0" cellpadding="0" cellspacing="0" class="force-row" style="width: 600px;">
                  <tr>
                    <td class="content-wrapper" align="center" style="padding-left:16px;padding-right:16px;padding-bottom:12px;">
                      <br>
                      <div id="wootric-question" class="title"
                        style="font-family:Arial,sans-serif;font-size:24px;font-weight:200;color:#253746">동료에게 추천할 의향이 있으신가요?
                      </div>
                      <div style="display: none; max-height: 0px; overflow: hidden;">
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" width="600">
                      <table>
                        <tr>
                          <td class="cols-wrapper">
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <table width="500" dir="rtl">
                            <tr>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="anchors">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/10?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-show-last-anchor">
                                    10
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/9?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    9
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/8?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    8
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/7?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    7
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/6?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    6
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/5?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    5
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/4?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    4
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/3?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    3
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/2?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    2
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/1?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-">
                                    1
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                          
                              
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            <td width="32" dir="rtl">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" class="force-row" align="right" style="margin:0px;padding:0px">
                              <tr class="anchors">
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                                <td class="col" valign="middle" align="center" style="width: 40px; height: 42px; padding-left:0px; padding-right:0px; margin-left:0px; margin-right:0px; border-radius: 50px; border-top: 1px solid #dadada;border-left: 1px solid #dadada;border-right: 1px solid #dadada;border-bottom: 1px solid #dadada;">
                                  <a class="number" style="display: inline-block; padding: 10px; font-family:Arial,sans-serif; color:#253746;text-decoration:none;white-space:nowrap;font-size: 13px;" rel="nofollow" data-method="post" href="https://app.wootric.com/email_survey/NPS-feba3919/*|EMAIL|*/0?survey_template_id=58038&survey_settings[language]=ko">
                                  <span class="NPS-show-first-anchor">
                                    0
                                  </span>
                                  </a>
                                </td>
                                <td style="width:1px; padding:0px; margin:0; border:0;" class="separator"></td>
                              </tr>
                              <tr>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                                <td style="height:5px;"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </td>
                            <![endif]-->
                            
                            <!--[if (gte mso 15)|(gte mso 14)|(gte mso 13)|(gte mso 12)|(gte mso 11)|(gte mso 10)|(gte mso 9)|(IE)]>
                            </tr>
                          </table>
                          <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="content-wrapper" align="center" style="padding-left:40px;padding-right:40px;padding-bottom: 24px;padding-top: 8px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="hidetable">
                        <tr>
                          <td align="left" style="font-family:Arial,sans-serif;font-weight:400;font-size:12px; color:#66737e;font-style:italic;">전혀 아니다</td>
                          <td align="right" style="font-family:Arial,sans-serif;font-weight:400;font-size:12px; color:#66737e;font-style:italic;">매우 그렇다</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                      <br />
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          
                            <td class="container-padding footer-text" style="font-family:Arial, sans-serif;font-size:11px;line-height:16px;color:#253746;padding-right:0px!important;padding-left:40px;">
                            
                              <a style="color:#253746 !important;"
                                 href="*|UNSUB|*">Unsubscribe</a>
                            
                            </td>
                          
                          <td align="right" class="container-padding footer-text" style="font-family: Arial, sans-serif;font-size:11px;line-height:16px;color:#253746;padding-right:40px;padding-left:0px!important;">
                            Powered by <a href="https://www.wootric.com" style="color: #253746;">InMoment</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <table border="0" cellpadding="0" cellspacing="0" width="100%" id="backgroundTable">
</table>

        </td>
      </tr>
    </table>
  </body>
</html>

`