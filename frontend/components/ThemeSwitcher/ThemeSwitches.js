import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Switch, Card, Spacer } from "@nextui-org/react";

import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export function ThemeSwitches() {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <div>
            <Card>
                <Card.Body
                    css={{ flexDirection: "row", justifyContent: "center" }}
                >
                    {type === "dark" ? "Dark" : "Light"}
                    <Switch
                        checked={isDark}
                        size="xl"
                        iconOff={<SunIcon filled />}
                        iconOn={<MoonIcon filled />}
                        onChange={(e) =>
                            setTheme(e.target.checked ? "dark" : "light")
                        }
                    />
                </Card.Body>
            </Card>
            <Switch
                shadow
                color="secondary"
                size="xl"
                disabled={type === "light"}
            />
        </div>
    );
}
