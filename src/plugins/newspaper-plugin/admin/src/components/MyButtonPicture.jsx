import * as Tooltip from '@radix-ui/react-tooltip';
import { IconButton } from '@strapi/design-system';

const MyButtonPicture = ({picture, size}) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <IconButton withTooltip={false} label="More actions" width={size}>
                        {picture}
                    </IconButton>
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

export { MyButtonPicture };
