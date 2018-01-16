<table class="table table-bordered table-striped" id="">
    <thead>
        <tr>
            <th COLSPAN="3" class="text-center success">PERCEPCIONES</th>
        </tr>
        <tr class="warning">                    
            <th class="text-center">INDICADOR</th>
            <th class="text-center">DESCRIPCIÓN</th>
            <th class="text-center">IMPORTE</th>
        </tr>
    </thead>
    <tbody>
        <?php $total_percepciones = 0; ?>
        <?php foreach ($percepciones as $fila){ ?>
            <tr>
                <td> <?php echo $fila->indicador; ?> </td>
                <td> <?php echo $fila->nombre; ?> </td>
                <td class="text-right"> <?php echo $fila->importe; ?> </td>
            </tr>
        <?php $total_percepciones += $fila->importe; ?>
        <?php } ?>
    </tbody>
    <tfoot>
        <tr>
         <th class="text-right" COLSPAN="2">TOTAL</th>
         <th class="text-right"> <?php echo $total_percepciones; ?> </th>
        </tr>
    </tfoot>
</table>

<table class="table table-bordered table-striped" id="">
    <thead>
        <tr>
            <th COLSPAN="3" class="text-center success">DEDUCCIONES</th>
        </tr>
        <tr class="warning">                    
            <th class="text-center">INDICADOR</th>
            <th class="text-center">DESCRIPCIÓN</th>
            <th class="text-center">IMPORTE</th>
        </tr>
    </thead>
    <tbody id="">
            <?php $total_deduccion = 0; ?>
            <?php foreach ($deducciones as $fila){ ?>
            <tr>
                <td > <?php echo $fila->indicador; ?> </td>
                <td > <?php echo $fila->nombre; ?> </td>
                <td class="text-right"> <?php echo $fila->importe; ?> </td>
            </tr>
            <?php $total_deduccion += $fila->importe; ?>
            <?php } ?>
        
    </tbody>
    <tfoot>
        <tr>
         <th class="text-right" COLSPAN="2">TOTAL</th>
         <th class="text-right"> <?php echo $total_deduccion; ?></th>
        </tr>
    </tfoot>
</table>

<!-- ************************************************************************ -->
<!-- Imprimir Líquido -->
<!-- ************************************************************************ -->
<?php $liquido = $total_percepciones - $total_deduccion; ?>
<h4 class="text-right"> Líquido: $<?php echo $liquido; ?></h4>
<!-- ************************************************************************ -->
<!-- APORTACIONES -->
<!-- ************************************************************************ -->
<table class="table table-bordered table-striped" id="">
    <thead>
        <tr>
            <th COLSPAN="3" class="text-center success">DEDUCCIONES</th>
        </tr>
        <tr class="warning">                    
            <th class="text-center">INDICADOR</th>
            <th class="text-center">DESCRIPCIÓN</th>
            <th class="text-center">IMPORTE</th>
        </tr>
    </thead>
    <tbody id="">
            <?php $total_aportaciones = 0; ?>
            <?php foreach ($aportaciones as $fila){ ?>
            <tr>
                <td > <?php echo $fila->indicador; ?> </td>
                <td > <?php echo $fila->nombre; ?> </td>
                <td class="text-right"> <?php echo $fila->importe; ?> </td>
            </tr>
            <?php $total_aportaciones += $fila->importe; ?>
            <?php } ?>
        
    </tbody>
    <tfoot>
        <tr>
         <th class="text-right" COLSPAN="2">TOTAL</th>
         <th class="text-right"> <?php echo $total_aportaciones; ?></th>
        </tr>
    </tfoot>
</table>
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