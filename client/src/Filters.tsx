import Checkbox from "./CheckBox";
import config from "./config";

interface FiltersProps {
    providers: string[];
    setProviders: (value: string[]) => void;
    versions: string[];
    setVersions: (value: string[]) => void;
    topologies: string[];
    setTopologies: (value: string[]) => void;
    sizes: string[];
    setSizes: (value: string[]) => void;
    ingressControllers: string[];
    setIngressControllers: (value: string[]) => void;
    connectivities: string[];
    setConnectivities: (value: string[]) => void;
}

const data = config.filters

const Filters = ({
    providers, setProviders,
    versions, setVersions,
    topologies, setTopologies,
    sizes, setSizes,
    ingressControllers, setIngressControllers,
    connectivities, setConnectivities
}: FiltersProps) => {
    const handleCheckboxChange = (items: string[], setItems: (value: string[]) => void, key: string, isChecked: boolean) => {
        if (isChecked) {
            setItems([...items, key]);
        } else {
            setItems(items.filter(item => item !== key));
        }
    };

    return (
        <>
            <h5 className="text-xl font-semibold">Providers</h5>
            {data.providers.map(provider => (
                <Checkbox
                    key={provider.key}
                    label={provider.description}
                    checked={providers.includes(provider.key)}
                    onChange={(isChecked) => handleCheckboxChange(providers, setProviders, provider.key, isChecked)}
                />
            ))}

            <h5 className="text-xl mt-2 font-semibold">Topology</h5>
            {data.topologies.map(topology => (
                <Checkbox
                    key={topology.key}
                    label={topology.description}
                    checked={topologies.includes(topology.key)}
                    onChange={(isChecked) => handleCheckboxChange(topologies, setTopologies, topology.key, isChecked)}
                />
            ))}

            <h5 className="text-xl mt-2 font-semibold">Versions</h5>
            {data.versions.map(version => (
                <Checkbox
                    key={version}
                    label={version}
                    checked={versions.includes(version)}
                    onChange={(isChecked) => handleCheckboxChange(versions, setVersions, version, isChecked)}
                />
            ))}

            <h5 className="text-xl mt-2 font-semibold">Size</h5>
            {data.sizes.map(size => (
                <Checkbox
                    key={size}
                    label={size}
                    checked={sizes.includes(size)}
                    onChange={(isChecked) => handleCheckboxChange(sizes, setSizes, size, isChecked)}
                />
            ))}

            <h5 className="text-xl mt-2 font-semibold">Ingress Controller</h5>
            {data.ingressControllers.map(controller => (
                <Checkbox
                    key={controller}
                    label={controller}
                    checked={ingressControllers.includes(controller)}
                    onChange={(isChecked) => handleCheckboxChange(ingressControllers, setIngressControllers, controller, isChecked)}
                />
            ))}

            <h5 className="text-xl mt-2 font-semibold">Connectivity</h5>
            {data.connectivities.map(connectivity => (
                <Checkbox
                    key={connectivity}
                    label={connectivity}
                    checked={connectivities.includes(connectivity)}
                    onChange={(isChecked) => handleCheckboxChange(connectivities, setConnectivities, connectivity, isChecked)}
                />
            ))}
        </>
    );
};

export default Filters;