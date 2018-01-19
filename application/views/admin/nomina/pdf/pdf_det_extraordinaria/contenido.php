<!-- ************************************************************************ -->
<!-- PERCEPCIONES-->
<!-- ************************************************************************ -->

<table class="table table-bordered" id="" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;font-size: 12px;">
    <thead>
        <tr>
            <th COLSPAN="3" class="text-center success">NÓMINA EXTRAORDINARIA</th>
        </tr>
        <tr class="warning">                    
            <th style="border: 1px solid #dddddd;text-align: center;padding: 8px;" >CODIGO</th>            
            <th style="border: 1px solid #dddddd;text-align: center;padding: 8px;" >IMPORTE</th>
            <th style="border: 1px solid #dddddd;text-align: center;padding: 8px;" >ISR</th>
        </tr>
    </thead>
    <tbody>
        <?php $total_extraordinaria = 0; ?>
        <?php $menosIsr = 0; ?>
        <?php foreach ($detalles as $fila){ ?>            
            <tr>
                <td style="border: 1px solid #dddddd;text-align: center;padding: 8px;" width="15%" > <?php echo $fila->no_plaza; ?> </td>
                <td style="border: 1px solid #dddddd;text-align: right;padding: 8px;" width="65%" > <?php echo number_format($fila->importe,2); ?> </td>
                <td style="border: 1px solid #dddddd;text-align: center;padding: 8px;" width="20%" > $<?php echo number_format($fila->isr,2); ?></td> 
                
            </tr>
         <?php $menosIsr += $fila->isr; ?>           
        <?php $total_extraordinaria += $fila->importe; ?>        
        <?php } ?>
    </tbody>
    <tfoot>
        <tr style="background-color: #dddddd;">
         <th  style="border: 1px solid #dddddd;text-align: right;padding: 8px;"  COLSPAN="2">TOTAL</th>
         <th  style="border: 1px solid #dddddd;text-align: left;padding: 8px;" > $<?php echo number_format($total_extraordinaria,2); ?> </th>
        </tr>
    </tfoot>
</table>

<!-- ************************************************************************ -->
<!-- Imprimir Líquido -->
<!-- ************************************************************************ -->

<?php $liquido = $total_extraordinaria - $menosIsr ?>
<h5 class="text-right"> <strong> Líquido: $<?php echo number_format($liquido,2); ?> </strong></h5>
<!-- ************************************************************************ -->
<!-- ÁREA DE FIRMAS -->
<!-- ************************************************************************ -->
<hr style="width: 200px; margin-bottom: 0; margin-top: 5rem;" />
<h5 class="text-center" style="margin-top: 0;">
    <?php echo $detalles[0]->empleado." ".$detalles[0]->ap_paterno." ".$detalles[0]->ap_materno; ?>
</h5>
<h5 class="text-center">
    RECIBÍ TRANSFERENCIA
</h5>
<h5 class="text-center">
    $<?php echo number_format($liquido,2); ?>
</h5>