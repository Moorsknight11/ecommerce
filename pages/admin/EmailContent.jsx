import React from 'react'

const EmailContent = (data) => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', options);

    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = date.toLocaleTimeString('en-US', timeOptions);

    return `${dateString} ${timeString}`;
  };

  // Usage
  const MyComponent = () => {
    const date = new Date(); // Example date

    return formatDate(date);
  };
  return (
    <div>
   <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#e5dcd2;">
      <div class="webkit">
         <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#e5dcd2">
            <tr>
               <td valign="top" bgcolor="#e5dcd2" width="100%">
                  <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                     <tr>
                        <td width="100%">
                           <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                 <td>
                                    <center>
                                       <table>
                                          <tr>
                                             <td width="600">
                                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                                   <tr>
                                                      <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left">
                                                         <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                                            <tr>
                                                               <td role="module-content">
                                                                  <p></p>
                                                               </td>
                                                            </tr>
                                                         </table>
                                                         <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ecb815cc-87bc-4a3f-a334-040d110516dc" data-mc-module-version="2019-10-22">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:5px 5px 5px 0px; line-height:20px; text-align:inherit; background-color:#e5dcd2;" height="100%" valign="top" bgcolor="#e5dcd2" role="module-content">
                                                                     <div>
                                                                        <div style="font-family: inherit; text-align: right"><a href="{{Weblink}}"><span style="font-size: 10px; color: #6f6860"><u>View this email in your browser.</u></span></a></div>
                                                                        <div></div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 0px 30px 0px;" bgcolor="#ffecea" data-distribution="1">
                                                            <tbody>
                                                               <tr role="module-content">
                                                                  <td height="100%" valign="top">
                                                                     <table width="600" style="width:600px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c7fa172a-cdbf-4e85-ac82-60844b32dd62">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                                                                                             <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="122" alt="" data-proportionally-constrained="true" data-responsive="false" src="http://cdn.mcauto-images-production.sendgrid.net/954c252fedab403f/f47c415b-9be7-460c-a6a8-e5194758419a/122x10.png" height="10" />
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="594ac2bc-2bb0-4642-8002-a8c9b543d125" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:10px 0px 0px 0px; line-height:16px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 10px">Irvine Spectrum Center Suite 104B</span></div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 10px">670 Spectrum Center Dr.</span></div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 10px">Irvine, CA 92618</span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cb31e9b8-b045-4c38-a478-ed2a6e2dc166">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                                                                     <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="600" alt="" data-proportionally-constrained="true" data-responsive="false" src="http://cdn.mcauto-images-production.sendgrid.net/954c252fedab403f/4ad091f2-00dc-4c89-9ad8-1d7aeaf169c2/600x189.png" height="189" />
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8fd711e6-aecf-4663-bf53-6607f08b57e9" data-mc-module-version="2019-10-22">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:30px 0px 40px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                     <div>
                                                                        <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px"><strong>THANK YOU FOR SHOPPING WITH US TODAY.</strong></span></div>
                                                                        <div style="font-family: inherit; text-align: center"><br /></div>
                                                                        <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px"><strong>Sales Receipt</strong></span></div>
                                                                        <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px">{MyComponent}</span></div>
                                                                        <div></div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8fd711e6-aecf-4663-bf53-6607f08b57e9.1" data-mc-module-version="2019-10-22">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:0px 40px 40px 40px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                     <div>
                                                                        <div style="font-family: inherit; text-align: inherit"><span style="color: #80817f; font-size: 12px"><strong>Employee:</strong></span><span style="color: #80817f; font-size: 12px"> Sammie</span></div>
                                                                        <div style="font-family: inherit; text-align: inherit"><span style="color: #80817f; font-size: 12px"><strong>Customer:</strong></span><span style="color: #80817f; font-size: 12px"> {data.name}</span></div>
                                                                        <div style="font-family: inherit; text-align: inherit"><span style="color: #80817f; font-size: 12px"><strong>Email:</strong></span><span style="color: #80817f; font-size: 12px"> {data.email}</span></div>
                                                                        <div style="font-family: inherit; text-align: inherit"><span style="color: #80817f; font-size: 12px"><strong>Ticket Number: </strong></span><span style="color: #80817f; font-size: 12px">{data.commandeId}</span></div>
                                                                        <div></div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:0px 40px 0px 40px;" role="module-content" height="100%" valign="top" bgcolor="">
                                                                     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="2px" style="line-height:2px; font-size:2px;">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px 0px 2px 0px;" bgcolor="#80817f"></td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 40px 0px 40px;" bgcolor="#FFFFFF" data-distribution="1,1,1">
                                                            <tbody>
                                                               <tr role="module-content">
                                                                  <td height="100%" valign="top">
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px"><strong>ITEM</strong></span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px"><strong>QTY</strong></span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.1" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px"><strong>PRICE</strong></span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10.1">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:0px 40px 0px 40px;" role="module-content" height="100%" valign="top" bgcolor="">
                                                                     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="2px" style="line-height:2px; font-size:2px;">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px 0px 2px 0px;" bgcolor="#80817f"></td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 40px 0px 40px;" bgcolor="#FFFFFF" data-distribution="1,1,1">
                                                            <tbody>
                                                               <tr role="module-content">
                                                                  <td height="100%" valign="top">
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.2" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px">Villa Floral (120 mL)</span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody> 
                                                                     </table>
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.2" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px">1</span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.1.1" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px">$175.90</span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10.1.2">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:0px 40px 0px 40px;" role="module-content" height="100%" valign="top" bgcolor="">
                                                                     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px 0px 1px 0px;" bgcolor="#80817f"></td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 40px 0px 40px;" bgcolor="#FFFFFF" data-distribution="1,1,1">
                                                            <tbody>
                                                               <tr role="module-content">
                                                                  <td height="100%" valign="top">
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.2.1" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px">Port Toulon (40 mL)</span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.2.1" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px">1</span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                     <table width="173" style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                 <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.1.1.1" data-mc-module-version="2019-10-22">
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                                             <div>
                                                                                                <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px">$35.90</span></div>
                                                                                                <div></div>
                                                                                             </div>
                                                                                          </td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10.1.2.1">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:0px 40px 0px 40px;" role="module-content" height="100%" valign="top" bgcolor="">
                                                                     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td style="padding:0px 0px 1px 0px;" bgcolor="#80817f"></td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="54da3428-feae-4c1a-a740-9c9fdb4e52d7">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:0px 0px 50px 0px;" role="module-content" bgcolor="">
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8fd711e6-aecf-4663-bf53-6607f08b57e9.2" data-mc-module-version="2019-10-22">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:10px 0px 20px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                                     <div>
                                                                        <div style="font-family: inherit; text-align: center"><span style="color: #80817f; font-size: 12px"><strong>Want to check out all our products? We now offer free shipping!</strong></span></div>
                                                                        <div></div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="0f986857-87df-4c0e-934f-e77105f78192">
                                                            <tbody>
                                                               <tr>
                                                                  <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                                                                     <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td align="center" bgcolor="#ffecea" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                                                                                 <a href="" style="background-color:#ffecea; border:1px solid #ffecea; border-color:#ffecea; border-radius:0px; border-width:1px; color:#80817f; display:inline-block; font-size:12px; font-weight:700; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">Shop Online</a>
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9bbc393c-c337-4d1a-b9f9-f20c740a0d44">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="20d6cd7f-4fad-4e9c-8fba-f36dba3278fc" data-mc-module-version="2019-10-22">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="padding:40px 30px 40px 30px; line-height:22px; text-align:inherit; background-color:#80817f;" height="100%" valign="top" bgcolor="#80817f" role="module-content">
                                                                     <div>
                                                                        <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 12px"><strong>Thank you for shopping at Beauvais + Lille. If you need to return any items, they need to be returned in its original packaging with proof of purchase. If you do not have a proof of purchase, we can offer you store credit.</strong></span></div>
                                                                        <div style="font-family: inherit; text-align: center"><br /></div>
                                                                        <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 12px"><strong>We hope you enjoy our products!</strong></span></div>
                                                                        <div></div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="background-color:#ffecea; color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                                            <div class="Unsubscribe--addressLine"></div>
                                                            <p style="font-size:12px; line-height:20px;"><a target="_blank" class="Unsubscribe--unsubscribeLink zzzzzzz" href="{{{unsubscribe}}}" style="color:#80817f;">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="color:#80817f;">Unsubscribe Preferences</a></p>
                                                         </div>
                                                         <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="04084f31-d714-4785-98c7-39de4df9fb7b">
                                                            <tbody>
                                                               <tr>
                                                                  <td align="center" bgcolor="#FFECEA" class="outer-td" style="padding:20px 0px 20px 0px; background-color:#FFECEA;">
                                                                     <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                                                                        <tbody>
                                                                           <tr>
                                                                              <td align="center" bgcolor="#f5f8fd" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a href="https://sendgrid.com/" style="background-color:#f5f8fd; border:1px solid #f5f8fd; border-color:#f5f8fd; border-radius:25px; border-width:1px; color:#a8b9d5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank">♥ POWERED BY TWILIO SENDGRID</a></td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </table>
                                    </center>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </div>
   </center>
</div>

  )
}

export default EmailContent