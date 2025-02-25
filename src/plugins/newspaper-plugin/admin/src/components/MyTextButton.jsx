import * as Tooltip from '@radix-ui/react-tooltip';
import { TextButton  } from '@strapi/design-system';

const MyTextButton = ({picture}) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <TextButton withTooltip={false} startIcon={picture}>
                        Click on me
                    </TextButton>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="TooltipContent" sideOffset={5}>
                        More actions
                    <Tooltip.Arrow className="TooltipArrow" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export {MyTextButton};


