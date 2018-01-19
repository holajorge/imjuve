<!-- ************************************************************************ -->
<!-- PERCEPCIONES-->
<!-- ************************************************************************ -->
<table class="table table-bordered" id="" style="font-size: 12px;">
    <thead>
        <tr>
            <th COLSPAN="3" class="text-center success">PERCEPCIONES</th>
        </tr>
        <tr class="warning">                    
            <th class="text-center">CÓDIGO</th>
            <th class="text-center">DESCRIPCIÓN</th>
            <th class="text-center">IMPORTE</th>
        </tr>
    </thead>
    <tbody>
        <?php $total_percepciones = 0; ?>
        <?php foreach ($percepciones as $fila){ ?>
            
            <tr>
                <td width="15%"> <?php echo $fila->indicador; ?> </td>
                <td width="65%"> <?php echo $fila->nombre; ?> </td>
                <td width="20%" class="text-right"> $<?php echo number_format($fila->importe,2); ?> 
                </td>
            </tr>
        <?php $total_percepciones += $fila->importe; ?>
        <?php } ?>
    </tbody>
    <tfoot>
        <tr>
         <th class="text-right" COLSPAN="2">TOTAL</th>
         <th class="text-right"> $<?php echo number_format($total_percepciones,2); ?> </th>
        </tr>
    </tfoot>
</table>
<!-- ************************************************************************ -->
<!-- DEDUCCIONES -->
<!-- ************************************************************************ -->
<table class="table table-bordered table-striped" id="" style="font-size: 12px;">
    <thead>
        <tr>
            <th COLSPAN="3" class="text-center success">DEDUCCIONES</th>
        </tr>
        <tr class="warning">                    
            <th class="text-center">CÓDIGO</th>
            <th class="text-center">DESCRIPCIÓN</th>
            <th class="text-center">IMPORTE</th>
        </tr>
    </thead>
    <tbody id="">
            <?php $total_deduccion = 0; ?>
            <?php foreach ($deducciones as $fila){ ?>
            <tr>
                <td width="15%"> <?php echo $fila->indicador; ?> </td>
                <td width="65%"> <?php echo $fila->nombre; ?> </td>
                <td width="20%" class="text-right"> $<?php echo number_format($fila->importe,2); ?> </td>
            </tr>
            <?php $total_deduccion += $fila->importe; ?>
            <?php } ?>
        
    </tbody>
    <tfoot>
        <tr>
         <th class="text-right" COLSPAN="2">TOTAL</th>
         <th class="text-right"> $<?php echo number_format($total_deduccion,2); ?></th>
        </tr>
    </tfoot>
</table>
<!-- ************************************************************************ -->
<!-- APORTACIONES -->
<!-- ************************************************************************ -->

<?php if ( !empty($aportaciones) ) { ?>
   
<table class="table table-bordered" id="" style="font-size: 12px;">
    <thead>
        <tr>
            <th COLSPAN="3" class="text-center success">APORTACIONES</th>
        </tr>
        <tr class="warning">                    
            <th class="text-center">CÓDIGO</th>
            <th class="text-center">DESCRIPCIÓN</th>
            <th class="text-center">IMPORTE</th>
        </tr>
    </thead>
    <tbody id="">
            <?php $total_aportaciones = 0; ?>
            <?php foreach ($aportaciones as $fila){ ?>
            <tr class="success">
                <td width="15%"> <?php echo $fila->indicador; ?> </td>
                <td width="65%"> <?php echo $fila->nombre; ?> </td>
                <td width="20%" class="text-right"> $<?php echo number_format($fila->importe,2); ?> </td>
            </tr>
            <?php $total_aportaciones += $fila->importe; ?>
            <?php } ?>
        
    </tbody>
    <tfoot>
        <tr>
         <th class="text-right" COLSPAN="2">TOTAL</th>
         <th class="text-right"> $<?php echo number_format($total_aportaciones,2); ?></th>
        </tr>
    </tfoot>
</table>
<?php } ?>
<!-- ************************************************************************ -->
<!-- Imprimir Líquido -->
<!-- ************************************************************************ -->
<?php $liquido = $total_percepciones - $total_deduccion; ?>
<h5 class="text-right"> <strong> Líquido: $<?php echo number_format($liquido,2); ?> </strong></h5>
<!-- ************************************************************************ -->
<!-- ÁREA DE FIRMAS -->
<!-- ************************************************************************ -->
<hr style="width: 200px; margin-bottom: 0; margin-top: 5rem;" />
<h5 class="text-center" style="margin-top: 0;">
    <?php echo $deducciones[0]->empleado." ".$deducciones[0]->ap_paterno." ".$deducciones[0]->ap_materno; ?>
</h5>
<h5 class="text-center">
    RECIBÍ TRANSFERENCIA
</h5>
<h5 class="text-center">
    $<?php echo number_format($liquido,2); ?>
</h5>