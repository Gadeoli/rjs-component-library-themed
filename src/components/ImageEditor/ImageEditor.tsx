import React, { FC, useMemo, useState } from 'react';
import { ImageEditorProps } from './ImageEditor.types';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import Container from '../Container';
import styled from 'styled-components';
import { usePhotoEditor } from './useEditor';
import Range from '../Range';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Button from '../Button';
import RadioMulti from '../RadioMulti';
import Label from '../Label';
import CardToggle from '../CardToggle';
import Card from '../Card';
import CardContent from '../CardContent';
import { defaultRadius, defaultXPM, defaultYPM } from '../../styles';
import InputColor from '../InputColor';

const ImageEditor: FC<ImageEditorProps> = ({
    file,
    onSaveImage,
    actions = {
        colorEditing: true,
        flip: true,
        rotate: true,
        zoom: true,
        drawing: true,
    },
    labels = {
        rotate: 'Rotate',
        brightness: 'Brightness',
        contrast: 'Contrast',
        saturate: 'Saturate',
        grayscale: 'Grayscale',
        reset: 'Reset photo',
        flipHorizontal: 'Flip horizontally',
        flipVertical: 'Flip vertically',
        zoom: 'Zoom',
        draw: 'Draw',
        pan: 'Pan', //Mover / Arrastar
        brushColor: 'Choose brush color',
        brushWidth: 'Choose brush width',
    },
    loading,
    className,
    style
}) => {
    const {theme} = useTheme();

    const classNames = handleCssClassnames([
        'cl-image__editor',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    const radioActions = [
        {key: 'pan', value: labels['pan']},
        {key: 'draw', value: labels['draw']},
    ];

    const {
        canvasRef,
        imageSrc,
        brightness,
        setBrightness,
        contrast,
        setContrast,
        saturate,
        setSaturate,
        grayscale,
        setGrayscale,
        rotate,
        setRotate,
        flipHorizontal,
        setFlipHorizontal,
        flipVertical,
        setFlipVertical,
        zoom,
        setZoom,
        action,
        setAction,
        setLineColor,
        lineColor,
        setLineWidth,
        lineWidth,
        handlePointerDown,
        handlePointerUp,
        handlePointerMove,
        handleWheel,
        resetFilters,
    } = usePhotoEditor({ file });

    const rangeActions = useMemo(() => [
        {name: 'brightness', value: brightness, min: 0, max: 200, step: 1, onChange: (v: number) => setBrightness(v)},
        {name: 'contrast', value: contrast, min: 0, max: 200, step: 1, onChange: (v: number) => setContrast(v)},
        {name: 'saturate', value: saturate, min: 0, max: 200, step: 1, onChange: (v: number) => setSaturate(v)},
        {name: 'grayscale', value: grayscale, min: 0, max: 100, step: 1, onChange: (v: number) => setGrayscale(v)},
        {name: 'rotate', value: rotate, min: 0, max: 360, step: 1, onChange: (v: number) => setRotate(v)},
        {name: 'zoom', value: zoom, min: 0.1, max: 3, step: 0.1, onChange: (v: number) => setZoom(v)}
    ], [
        brightness,
        contrast,
        saturate,
        grayscale,
        rotate,
        zoom
    ]);

    //state
    const [showSubActions, setShowSubActions] = useState(false);
    //state - end

    const handleSubActionContainer = ({action} : {action: string;}) => {
        if(action === 'draw'){
            setShowSubActions(!showSubActions);
        }else{
            setShowSubActions(false);
        }
    }

    return (<Container type='clean' className={classNames} style={style}>
        {imageSrc && (<CanvasContainer>
            <Canvas
                style={{
                    width: 'auto',
                    height: 'auto',
                    maxHeight: '22rem',
                    maxWidth: '36rem',
                    touchAction: 'none',
                }}
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onWheel={handleWheel}
            />
            <SubActionContainer theme={theme} show={showSubActions}>
                <Button className='sub-action-minimaze' onClick={() => setShowSubActions(false)}>
                    &#128469;
                </Button>
                {action == 'draw' && (<SubAction>
                    <InputColor 
                        name="draw-color"
                        onChange={(e: any) => setLineColor(e.target.value)} 
                        value={lineColor} 
                        style={{marginRight: '0.25rem'}}
                    />
                    <Input 
                        name={'line_width'}
                        type='number'
                        onChange={(e: any) => setLineWidth(Number(e.target.value))}
                        value={lineWidth}
                        min={2}
                        max={100}
                        style={{marginTop: '4px'}}
                    />
                </SubAction>)}
            </SubActionContainer>
        </CanvasContainer>)}

        {(imageSrc || 1 === 1) && (<Controls theme={theme}>
            <Action>
                <Button style={{fontSize: '70%'}} onClick={(e: any) => onSaveImage({src: imageSrc, e})}>{/* canvas.toDataURL(file?.type); */}
                    &#10003;
                </Button>
            </Action>  

            <CardToggle
                className='' 
                yOverride='top'
                xOverride='left'
                toggleTrigger={(trigger: any) => (<Action>
                    <Button onClick={() => trigger()}>&equiv;</Button>
                </Action>)} 
            >
                <Card>
                    <CardContent>
                        {rangeActions.map((ac, k) => (<Action key={k}>
                            <Range
                                name={ac.name}
                                min={ac.min}
                                max={ac.max}
                                value={ac.value}
                                onChange={(e: any) => ac.onChange(Number(e.target.value))}
                                step={ac.step}
                            />
                            <Label>{labels[ac.name]}</Label>
                        </Action>))}
                    </CardContent>
                </Card>
            </CardToggle>

            <Action>
                <Button onClick={resetFilters}>
                    &#8635;
                </Button>
            </Action>              

            <SiblingsActions>
                <Action>
                    <Checkbox
                        name='flipHorizontal'
                        type='primary' 
                        checkedValue={true}
                        uncheckedValue={false}
                        value={flipHorizontal}
                        onChange={(v: boolean) => setFlipHorizontal(v)}
                        disabled={loading}
                        text={labels.flipHorizontal}
                        checkedIcon={true}
                    />
                </Action>

                <Action>
                    <Checkbox
                        name='flipVertical'
                        type='primary' 
                        checkedValue={true}
                        uncheckedValue={false}
                        value={flipVertical}
                        onChange={(v: boolean) => setFlipVertical(v)}
                        disabled={loading}
                        text={labels.flipVertical}
                        checkedIcon={true}
                    />
                </Action>
            </SiblingsActions>
            
            <Action>
                <RadioMulti
                    type='primary'
                    selectedValue={action}
                    values={radioActions}
                    onChange={(sel: any) => {
                        setAction(sel.key);
                        handleSubActionContainer({action: sel.key});
                    }}
                    selectedIcon={true}
                />
            </Action>
        </Controls>)}
    </Container>);
}

export default ImageEditor;

const CanvasContainer = styled.div`
    background-color: ${props => props.theme.background};
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
`;

const Canvas = styled.canvas`

`;

const Controls = styled.div`
    width: 100%;
    padding-top: ${defaultYPM};
    padding-bottom: ${defaultYPM};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom-left-radius: ${defaultRadius};
    border-bottom-right-radius: ${defaultRadius};
    background-color: ${props => props.theme.background};
`;

const SiblingsActions = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.25rem;
`;

const SubActionContainer = styled.div<{show: boolean}>`
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.background};
    padding-top: 2rem;

    button.sub-action-minimaze{
        position: absolute;
        top: 0.5rem;
        right: 1rem;
    }
`;

const SubAction = styled.div`
    display: flex;
    align-items: center;
    padding: ${defaultYPM} ${defaultXPM};
`;

const Action = styled.div`
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    position: relative;
`;