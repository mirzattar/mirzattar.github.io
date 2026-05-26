import faBars from "@img/bars-solid-full.svg"
import { IconButton } from "@c/Buttons"
import { Collapsible, Tooltip } from "@base-ui/react"
import "./UIOptionsMenu.css"
import ThemeToggle from "@c/ThemeToggle"
import ThemeRandom from "@c/ThemeRandom"

interface Props {
	themeToggleText: string
	themeRandomText: string
}

export default function OptionsMenu(props: Props) {
	return (
		<Collapsible.Root id="uiOptionsMenu">
			<Collapsible.Trigger render={ <IconButton icon={ faBars } /> } />
			<Collapsible.Panel id="uiOptionsMenuPanel">
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger delay={ 0 } render={ <ThemeToggle /> } />
						<Tooltip.Portal className="ui-options-tooltip-portal">
							<Tooltip.Positioner sideOffset={ 8 } side="left">
								<Tooltip.Popup>
									<Tooltip.Arrow />
									{ props.themeToggleText }
								</Tooltip.Popup>
							</Tooltip.Positioner>
						</Tooltip.Portal>
					</Tooltip.Root>

					<Tooltip.Root>
						<Tooltip.Trigger delay={ 0 } render={ <ThemeRandom /> } />
						<Tooltip.Portal className="ui-options-tooltip-portal">
							<Tooltip.Positioner sideOffset={ 8 } side="left">
								<Tooltip.Popup>
									<Tooltip.Arrow className="ui-options-tooltip-arrow" />
									{ props.themeRandomText }
								</Tooltip.Popup>
							</Tooltip.Positioner>
						</Tooltip.Portal>
					</Tooltip.Root>
				</Tooltip.Provider>
			</Collapsible.Panel>
		</Collapsible.Root>
	)
}
