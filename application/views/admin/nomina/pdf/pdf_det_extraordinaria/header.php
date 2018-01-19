<body>
    <?php
    $D=date("d");
    $M=date("m");
    $Y=date("Y");
    setlocale(LC_TIME, 'spanish');  
    $nombre=strftime("%B",mktime(0, 0, 0, $M+1, 0 ,0)); 
    $mes= strtoupper ($nombre );
    ?>

     <table width="100%" style="margin: 0;">
        <tr>
            <td rowspan="2" width="200">
                <img style="vertical-align: top" src="<?php echo base_url(); ?>assets/img/logo/juventud.png" width="150" />
            </td>
            <td class="text-center">
                <h5>GOBIERNO DEL ESTADO DE QUINTANA ROO</h5>
            </td>
            <td style="text-align: right;">
                <?php echo $D." ".$mes." ".$Y; ?>
            </td>
        </tr>
        <tr>
            <td class="text-center"> <h5>INSTITUTO QUINTANARROENSE DE LA JUVENTUD</h5> </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td class="text-center"> <h5>REPORTE DE NÓMINA EXTRAORDINARIA</h5> </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td class="text-center" style="font:bold 12px "Trebuchet MS"; "> <strong><?php echo $header_pdf[0]->concepto_extranombre; ?></strong> </td>
        </tr>
        <tr>
            <td></td>
            <td class="text-center" style="font:bold 12px "Trebuchet MS"; "> <h5> DEL <?php echo $header_pdf[0]->fecha; ?> </h5> </td>
        </tr>
    </table> 

    <table  class="table table-striped txt-header-pdf " id="id_tab_per" style="margin-top: 2rem; font-size: 12px;">
        <tbody id="">
           <tr>
                <td > No. de plaza: </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php echo $header_pdf[0]->no_plaza; ?> </td>
                <td> No. de empleado: </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php echo $header_pdf[0]->no_empleado; ?> </td> 
           </tr>
           <tr>
                <td> Nombre:  </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php
                    echo $header_pdf[0]->empleado;
                    echo " ";
                    echo $header_pdf[0]->ap_paterno;
                    echo " ";
                    echo $header_pdf[0]->ap_materno; 
                ?></td>
                <td> RFC: </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php echo $header_pdf[0]->rfc; ?> </td> 
           </tr>
           <tr>
                <td> CURP:  </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php echo $header_pdf[0]->curp; ?></td>
                <td> DEPARTAMENTO: </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php echo $header_pdf[0]->depto; ?> </td> 
           </tr>
           <tr>
                <td> NIVEL:  </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php echo $header_pdf[0]->nivel; ?></td>
                <td> HORAS: </td> 
                <td style="font:bold 12px "Trebuchet MS"; "> <?php echo $header_pdf[0]->horas; ?> hrs. </td> 
           </tr>
        </tbody>
    </table>
    