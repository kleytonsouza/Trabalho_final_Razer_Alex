package br.ufpr.das.pedidos.api.event.listener;



import java.net.URI;
import javax.servlet.http.HttpServletResponse;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.ufpr.das.pedidos.api.event.ResourceCreatedEvent;


@Component
public class ResourceCreatedListener implements ApplicationListener<ResourceCreatedEvent>{
	
	@Override
	public void onApplicationEvent(ResourceCreatedEvent resourceCreatedEVent) {
		HttpServletResponse response = resourceCreatedEVent.getResponse();
		Integer id = resourceCreatedEVent.getId();
		
		addHeaderLocation(response, id);
		
	}
	

	private void addHeaderLocation(HttpServletResponse response, Integer id) {
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/id")
	        	.buildAndExpand(id).toUri();
        response.setHeader("Location", uri.toASCIIString());
	}

}
