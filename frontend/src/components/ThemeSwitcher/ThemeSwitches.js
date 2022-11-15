import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Switch, Card, Spacer, Tooltip } from "@nextui-org/react";

import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { InfoIcon } from "./InfoIcon";

export function ThemeSwitches({ styles }) {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <div>
            <Card className={styles.theme}>
                <Card.Body
                    css={{
                        height: "5rem",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <span>
                        <strong>Theme:</strong>{" "}
                        {type === "dark" ? "Dark" : "Light"}
                    </span>
                    <Switch
                        color="secondary"
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
            <Spacer />
            <Card className={styles.theme}>
                <Card.Body
                    css={{
                        height: "5rem",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <Switch
                        shadow
                        color="secondary"
                        size="xl"
                        disabled={type === "light"}
                    />
                    <span>
                        <strong>Ambient Mode:</strong>{" "}
                        {type === "dark" ? "On" : "Off"}
                    </span>
                    {type === "light" && (
                        <Tooltip
                            content={
                                "Enable dark theme for enabling Ambient Mode."
                            }
                            color="secondary"
                        >
                            <InfoIcon filled />
                        </Tooltip>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}
